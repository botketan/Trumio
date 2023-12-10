import 'dart:convert';
import 'dart:io';

import 'package:app/models/cia_message_model.dart';
import 'package:app/models/post_model.dart';
import 'package:app/models/user_model.dart';
import 'package:app/requests/cia_api_service.dart';
import 'package:app/requests/post_api_service.dart';
import 'package:app/requests/user_api_service.dart';
import 'package:app/utils/local_storage_service.dart';

class AppDataLayer {
  final LocalStorageService _localStorage = LocalStorageService();

  Future<UserModel> getUserData(String userId) async {
    try {
      await InternetAddress.lookup('example.com');
      final userModel = await UserService().getUserData(userId);
      await _localStorage.storeData("getUserData\$$userId", json.encode(userModel.toJson()));
      return userModel;
    } on Exception catch (_) {
      final storedData = await _localStorage.fetchData("getUserData\$$userId");
      if (storedData != null) {
        return UserModel.fromJson(jsonDecode(storedData));
      } else {
        throw Exception('No internet connection and no local data found');
      }
    }
  }

  Future<CIAMessageModel> sendMessage(String chatId, String message) async {
    return CIAService().sendMessage(chatId, message);
  }

  Future<String> explainTerms(PostModel postModel) async {
    return CIAService().explainTerms(postModel);
  }

  Future<String> summarizeThePost(PostModel postModel) async {
    return CIAService().summarizeThePost(postModel);
  }

  Future<String> factChecker(PostModel postModel) async {
    return CIAService().factChecker(postModel);
  }

  Future<String> createNotes(PostModel postModel) async {
    return CIAService().createNotes(postModel);
  }

  Future<List<PostModel>> getUserExplorePosts(String userId) async {
    try {
      await InternetAddress.lookup('example.com');
      final posts = await PostService().getUserExplorePosts(userId);
      await _localStorage.storeData("getUserExplorePosts\$$userId", json.encode(posts.map((e) => e.toJson()).toList()));
      return posts;
    } on Exception catch (_) {
      final storedData = await _localStorage.fetchData("getUserExplorePosts\$$userId");
      if (storedData != null) {
        return (jsonDecode(storedData) as List<dynamic>).map((e) => PostModel.fromJson(e)).toList();
      } else {
        throw Exception('No internet connection and no local data found');
      }
    }
  }

  Future<List<PostModel>> getUserAuthoredPosts(String userId) async {
    try {
      await InternetAddress.lookup('example.com');
      final posts = await PostService().getUserAuthoredPosts(userId);
      await _localStorage.storeData("getUserAuthoredPosts\$$userId", json.encode(posts.map((e) => e.toJson()).toList()));
      return posts;
    } on Exception catch (_) {
      final storedData = await _localStorage.fetchData("getUserAuthoredPosts\$$userId");
      if (storedData != null) {
        return (jsonDecode(storedData) as List<dynamic>).map((e) => PostModel.fromJson(e)).toList();
      } else {
        throw Exception('No internet connection and no local data found');
      }
    }
  }
}
