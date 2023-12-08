class ReplyModel {
  String id;
  String username;
  String position;
  String userId;
  String? icon;
  String content;
  int likes;

  ReplyModel({
    required this.id,
    required this.username,
    required this.userId,
    required this.position,
    required this.icon,
    required this.content,
    required this.likes,
  });

  Map<String, dynamic> toJson() => {
      "_id": id,
      "username": username,
      "userId": userId,
      "position": position,
      "icon": icon,
      "content": content,
      "likes": likes,
    };

  factory ReplyModel.fromJson(Map<String, dynamic> json) {
    return ReplyModel(
      id: json["_id"],
      username: json["username"] ?? "",
      userId: json["userId"],
      position: json["position"] ?? "",
      icon: json["icon"],
      content: json["content"],
      likes: json["likes"] ?? 0,
    );
  }
}
