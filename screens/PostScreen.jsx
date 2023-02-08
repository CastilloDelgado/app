import { View, Text, StyleSheet, Alert, Pressable } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import colors from "../settings/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import DotsIcons from "../components/icons/DotsIcons";
import ProfileImageBadge from "../components/ProfileImageBadge";
import { postData } from "./data";
import PostEngagementInfo from "../components/PostEngagementInfo";
import CustomActivityIndicator from "../components/CustomActivityIndicator";
import PostService from "../services/PostService";
import { format } from "date-fns";
import { Modalize } from "react-native-modalize";
import TrashcanIcon from "../components/icons/TrashcanIcon";
import { AuthContext } from "../context/AuthProvider";
import ImageSlider from "../components/ImageSlider";
import { STORAGE_SERVER_URL } from "../constants";

export default function PostScreen({ route, navigation }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const modalRef = useRef(null);

  const goToProfileScreen = () =>
    navigation.navigate("Profile Screen", { profileId: data.user.id });

  const openModal = () => {
    modalRef.current?.open();
  };
  const closeModal = () => {
    modalRef.current?.close();
  };

  const handleDeletePost = () => {
    closeModal();
    PostService.deletePost(data.id)
      .then((response) => {
        navigation.navigate("Home");
      })
      .catch((error) => console.log(error.response.data.message))
      .then(() => {});
  };

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

  const showDeleteAlert = () => {
    Alert.alert("Delete this post?", "This post will be deleted forever!!!", [
      {
        text: "Cancel",
        onPress: closeModal,
        style: "cancel",
      },
      {
        text: "I'm sure",
        onPress: handleDeletePost,
        style: "default",
      },
    ]);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const createdAtDate = new Date(data?.created_at || null);

  let images = [];
  if (data.images) {
    images = data?.images.map((image) => ({
      uri: `${STORAGE_SERVER_URL}${image.url}`,
    }));
  }

  return (
    <>
      {loading ? (
        <CustomActivityIndicator alwaysOn />
      ) : (
        <>
          <ImageSlider images={[...images]} />
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
              {user.id === data.user?.id ? (
                <TouchableOpacity onPress={openModal}>
                  <DotsIcons />
                </TouchableOpacity>
              ) : null}
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
          <Modalize ref={modalRef} snapPoint={200}>
            <View style={styles.modal}>
              <Pressable style={styles.modalItem} onPress={showDeleteAlert}>
                <TrashcanIcon />
                <Text style={styles.modaltemText}>Delete post</Text>
              </Pressable>
            </View>
          </Modalize>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  modaltemText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  modal: {
    paddingHorizontal: 23,
    paddingVertical: 32,
  },
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
