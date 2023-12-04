import 'package:app/models/cia_message_model.dart';
import 'package:dio/dio.dart';

import 'api_service.dart';

class CIAService extends ApiService {
  CIAService() : super();

  Future<CIAMessageModel> sendMessage(String chatId, String message) async {
    Response response = await post("/cia/postChat/", {"chatId": chatId, "ques": message});
    return CIAMessageModel.fromJson(response.data["message"]);
  }

}
