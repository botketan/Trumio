class CIAMessageModel {
  String role;
  String content;

  CIAMessageModel({
    required this.role,
    required this.content,
  });

  Map<String, dynamic> toJson() => {
      "role": role,
      "content": content,
    };

  factory CIAMessageModel.fromJson(Map<String, dynamic> json) {
    return CIAMessageModel(
      role: json["role"] ?? "",
      content: json["content"] ?? "",
    );
  }
}
