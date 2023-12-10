import 'package:app/models/comment_model.dart';

class PostModel {
  String id;
  String title;
  String? userId;
  bool isPublished;
  String? parentPost;
  String? community;
  String? content;
  String? contentPublished;
  String? stringContent;
  String? coverImage;
  int likes;
  List<CommentModel> comments;

  PostModel({
    required this.id,
    required this.title,
    required this.userId,
    required this.isPublished,
    required this.parentPost,
    required this.community,
    required this.content,
    required this.contentPublished,
    required this.stringContent,
    required this.coverImage,
    required this.likes,
    required this.comments,
  });

  Map<String, dynamic> toJson() => {
      "_id": id,
      "title": title,
      "userId": userId,
      "isPublished": isPublished,
      "parentPost": parentPost,
      "community": community,
      "content": content,
      "contentPublished": contentPublished,
      "stringContent": stringContent,
      "likes": likes,
      "coverImage": coverImage,
      "comments": comments.map((e) => e.toJson()).toList(),
    };

  factory PostModel.fromJson(Map<String, dynamic> json) {
    return PostModel(
      id: json["_id"],
      title: json["title"] ?? "",
      userId: json["userId"],
      isPublished: json["isPublished"] ?? false,
      parentPost: json["parentPost"],
      community: json["community"],
      content: json["content"],
      contentPublished: json["contentPublished"],
      stringContent: json["stringContent"],
      likes: json["likes"] ?? 0,
      coverImage: json["coverImage"],
      comments: (json["comments"] as List<dynamic>)
          .map((e) => CommentModel.fromJson(e))
          .toList(),
    );
  }
}
