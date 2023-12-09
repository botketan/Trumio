import 'package:app/models/cia_message_model.dart';
import 'package:app/models/post_model.dart';
import 'package:dio/dio.dart';

import 'api_service.dart';

class CIAService extends ApiService {
  CIAService() : super();

  Future<CIAMessageModel> sendMessage(String chatId, String message) async {
    Response response = await post("/cia/postChat/", {"chatId": chatId, "ques": message});
    return CIAMessageModel.fromJson(response.data["message"]);
  }

  Future<String> explainTerms(PostModel postModel) async {
    Response response = await post("/cia/postHelper/", {"content": postModel.stringContent ?? "", "botname": "A bot which takes content as input and finds difficult terms in it and explains it accordingly in 200 words."});
    return response.data;
  }
  
  Future<String> summarizeThePost(PostModel postModel) async {
    Response response = await post("/cia/postHelper/", {"content": postModel.stringContent ?? "", "botname": "A bot which takes content as input and summarises the content in 200 words."});
    return response.data;
  }

  Future<String> factChecker(PostModel postModel) async {
    Response response = await post("/cia/postHelper/", {"content": postModel.stringContent ?? "", "botname": "A bot which takes content as input and cross checks all facts in input in 200 words."});
    return response.data;
  }

  Future<String> createNotes(PostModel postModel) async {
    Response response = await post("/cia/postHelper/", {"content": postModel.stringContent ?? "", "botname": "A bot which takes content as input and provides detailed notes in 200 words."});
    return response.data;
  }

}
