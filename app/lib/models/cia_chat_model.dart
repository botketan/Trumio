import 'package:app/models/cia_message_model.dart';

class CIAChatModel {
  String id;
  List<CIAMessageModel> messages;
  String botName;

  CIAChatModel({
    required this.id,
    required this.messages,
    required this.botName,
  });

  Map<String, dynamic> toJson() => {
      "messages": messages.map((e) => e.toJson()).toList(),
      "botName": botName,
  };

  factory CIAChatModel.fromJson(Map<String, dynamic> json) {
    return CIAChatModel(
      id: json["_id"],
      messages: (json["messages"] as List<dynamic>)
          .map((e) => CIAMessageModel.fromJson(e))
          .toList(),
      botName: json["botName"] ?? "",
    );
  }
}
