import 'package:app/models/badge_model.dart';
import 'package:app/models/cia_chat_model.dart';
import 'package:app/models/project_model.dart';

class UserModel {
  String id;
  String name;
  String email;
  String username;
  String? position;
  String? college;
  String? icon;
  String? description;
  int points;
  int sparks;
  List<BadgeModel> badges;
  List<ProjectModel> projects;
  List<CIAChatModel> chats;

  UserModel({
    required this.id,
    required this.name,
    required this.email,
    required this.username,
    required this.position,
    required this.college,
    required this.icon,
    required this.description,
    required this.points,
    required this.sparks,
    required this.badges,
    required this.projects,
    required this.chats,
  });

  Map<String, dynamic> toJson() => {
      '_id': id,
      'name': name,
      'email': email,
      'userName': username,
      'position': position,
      'college': college,
      'icon': icon,
      'description': description,
      'points': points,
      'sparks': sparks,
      'badges': badges.map((e) => e.toJson()).toList(),
      'projects': projects.map((e) => e.toJson()).toList(),
      'chatIds': chats.map((e) => e.toJson()).toList(),
    };

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      id: json['_id'],
      name: json['name'] ?? "",
      email: json['email'] ?? "",
      username: json['userName'] ?? "",
      position: json['position'],
      college: json['college'],
      icon: json['icon'],
      description: json['description'],
      points: json['points'] ?? 0,
      sparks: json['sparks'] ?? 0,
      badges: (json['badges'] as List<dynamic>)
          .map((e) => BadgeModel.fromJson(e))
          .toList(),
      projects: (json['projects'] as List<dynamic>)
          .map((e) => ProjectModel.fromJson(e))
          .toList(),
      chats: (json['chatIds'] as List<dynamic>)
          .map((e) => CIAChatModel.fromJson(e))
          .toList(),
    );
  }
}
