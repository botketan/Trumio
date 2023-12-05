class TaskModel {
  String id;
  String title;
  bool isCompleted;

  TaskModel({
    required this.id,
    required this.title,
    required this.isCompleted,
  });

  Map<String, dynamic> toJson() => {
      "_id": id,
      "title": title,
      "isCompleted": isCompleted,
    };

  factory TaskModel.fromJson(Map<String, dynamic> json) {
    return TaskModel(
      id: json["_id"],
      title: json["title"] ?? "",
      isCompleted: json["isCompleted"] ?? false,
    );
  }
}
