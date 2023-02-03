import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../settings/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import DotsIcons from "../components/icons/DotsIcons";
import ProfileImageBadge from "../components/ProfileImageBadge";
import { postData } from "./data";
import PostEngagementInfo from "../components/PostEngagementInfo";
import CustomActivityIndicator from "../components/CustomActivityIndicator";
import PostService from "../services/PostService";
import { format } from "date-fns";

export default function PostScreen({ route, navigation }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const goToProfileScreen = () => navigation.navigate("Profile Screen");

  const fetchPost = () => {
    setLoading(true);
    PostService.getPostById(route.params.postId)
      .then((response) => {
        setData(response.data);
      })
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const createdAtDate = new Date(data?.created_at || null);

  return (
    <>
      {loading ? (
        <CustomActivityIndicator alwaysOn />
      ) : (
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <TouchableOpacity
              style={styles.flexRow}
              onPress={goToProfileScreen}
            >
              <ProfileImageBadge image={data?.user?.avatar} />
              <View>
                <Text style={styles.postUsername}>{data?.user?.name}</Text>
                <Text
                  style={styles.postUsertag}
                >{`@${data?.user?.usertag}`}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <DotsIcons />
            </TouchableOpacity>
          </View>
          <View style={styles.postContentContainer}>
            <Text style={styles.postTitle}>{data?.title}</Text>
            <Text style={styles.postDescription}>{data?.description}</Text>
            <View style={styles.timeContainer}>
              <Text style={styles.timeItem}>
                {format(createdAtDate, "h:mm a")}
              </Text>
              <Text style={styles.timeItem}>
                {format(createdAtDate, "d MMM yyyy")}
              </Text>
            </View>
          </View>

          {/* ENGAGEMENT DATA */}
          <View style={styles.postEngagementContainer}>
            <PostEngagementInfo item={postData} />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackgroundColor,
  },

  timeContainer: {
    flexDirection: "row",
    marginTop: 10,
  },

  timeItem: {
    color: colors.secondaryTextColor,
    marginRight: 10,
  },

  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 10,
  },

  flexRow: {
    flexDirection: "row",
  },

  postUsername: {
    fontWeight: "bold",
  },
  postUsertag: {
    color: colors.secondaryTextColor,
  },

  postContentContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.separatorColor,
  },

  postTitle: {
    textAlign: "justify",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  postDescription: {
    textAlign: "justify",
    fontSize: 16,
  },

  postEngagementContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.separatorColor,
  },
});
