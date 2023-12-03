import 'package:app/models/milestone_model.dart';

class ProjectModel {
  String id;
  String title;
  String description;
  String userId;
  List<MilestoneModel> milestones;

  ProjectModel({
    required this.id,
    required this.title,
    required this.description,
    required this.userId,
    required this.milestones,
  });

  Map<String, dynamic> toJson() => {
      "title": title,
      "description": description,
      "userId": userId,
      "milestones": milestones.map((e) => e.toJson()).toList(),
    };

  factory ProjectModel.fromJson(Map<String, dynamic> json) {
    return ProjectModel(
      id: json['_id'],
      title: json['title'] ?? "",
      description: json['description'] ?? "",
      userId: json['userId'] ?? "",
      milestones: (json['milestones'] as List<dynamic>)
          .map((e) => MilestoneModel.fromJson(e))
          .toList(),
    );
  }
}
