import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../settings/colors";
import PostList from "../components/PostList";
import ProfileHeader from "../components/ProfileHeader";
import PostService from "../services/PostService";
import UserService from "../services/UserService";
import { useFocusEffect } from "@react-navigation/core";

export default function ProfileScreen({ route, navigation }) {
  const [profileData, setProfileData] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [page, setPage] = useState(1);
  const [noPostsLeft, setNoPostsLeft] = useState(false);

  const fetchPosts = (profileId) => {
    setLoading(true);
    PostService.getPostsByUserId(profileId, page)
      .then((response) => {
        if (page === 1) {
          setData([...response.data.data]);
        } else {
          setData([...data, ...response.data.data]);
        }

        if (!response.data.next_page_url) {
          setNoPostsLeft(true);
        }
      })
      .then(() => setLoading(false));
  };

  const handleRefresh = () => {
    setPage(1);
    setNoPostsLeft(false);
  };

  const handleEnd = () => {
    if (!noPostsLeft) {
      setPage(page + 1);
    }
  };

  const fetchUserData = () => {
    setLoadingProfile(true);
    UserService.getUserById(route.params?.profileId)
      .then((response) => {
        setProfileData({ ...response.data });
        fetchPosts(response.data.id);
      })
      .catch((error) => console.log(error))
      .then(() => setLoadingProfile(false));
  };

  useEffect(() => {
    if (profileData.id) {
      fetchPosts(profileData.id);
    }
  }, [page]);

  useEffect(() => {
    fetchUserData();
  }, []);

  console.log(profileData);

  return (
    <PostList
      data={data}
      navigation={navigation}
      refreshing={loading}
      handleRefresh={handleRefresh}
      handleEnd={handleEnd}
      noPostsLeft={noPostsLeft}
      page={page}
      header={() => (
        <ProfileHeader data={profileData} loading={loadingProfile} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackgroundColor,
  },
});
