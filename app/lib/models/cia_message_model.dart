class CIAMessageModel {
  String id;
  String role;
  String content;

  CIAMessageModel({
    required this.id,
    required this.role,
    required this.content,
  });

  Map<String, dynamic> toJson() => {
      "role": role,
      "content": content,
    };

  factory CIAMessageModel.fromJson(Map<String, dynamic> json) {
    return CIAMessageModel(
      id: json["_id"],
      role: json["role"] ?? "",
      content: json["content"] ?? "",
    );
  }
}
