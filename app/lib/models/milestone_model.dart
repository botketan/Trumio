import 'package:app/models/task_model.dart';

class MilestoneModel {
  String id;
  String title;
  List<TaskModel> tasks;
  int progress;

  MilestoneModel({
    required this.id,
    required this.title,
    required this.tasks,
    required this.progress,
  });

  Map<String, dynamic> toJson() => {
      "title": title,
      "task": tasks.map((e) => e.toJson()).toList(),
      "progress": progress
    };

  factory MilestoneModel.fromJson(Map<String, dynamic> json) {
    return MilestoneModel(
      id: json["_id"],
      title: json["title"] ?? "",
      tasks: (json["task"] as List<dynamic>)
          .map((e) => TaskModel.fromJson(e))
          .toList(),
      progress: json["progress"] ?? 0,
    );
  }
}
