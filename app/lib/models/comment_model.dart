import 'package:app/models/reply_model.dart';

class CommentModel {
  String id;
  String username;
  String position;
  String userId;
  String? icon;
  String content;
  int likes;
  List<ReplyModel> replies = [];

  CommentModel({
    required this.id,
    required this.username,
    required this.userId,
    required this.position,
    required this.icon,
    required this.content,
    required this.likes,
    required this.replies,
  });

  Map<String, dynamic> toJson() => {
      "_id": id,
      "username": username,
      "userId": userId,
      "position": position,
      "icon": icon,
      "content": content,
      "likes": likes,
      "reply": replies.map((e) => e.toJson()).toList(),
    };

  factory CommentModel.fromJson(Map<String, dynamic> json) {
    return CommentModel(
      id: json["_id"],
      username: json["username"] ?? "",
      userId: json["userId"],
      position: json["position"] ?? "",
      icon: json["icon"],
      content: json["content"],
      likes: json["likes"] ?? 0,
      replies: (json["reply"] as List<dynamic>)
          .map((e) => ReplyModel.fromJson(e))
          .toList(),
    );
  }
}
