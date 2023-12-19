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
  bool demo = false;

  Future<UserModel> getUserData(String userId) async {
    if (demo) {
      final storedData = await _localStorage.fetchData("getUserData\$$userId");
      if (storedData != null) {
        return UserModel.fromJson(jsonDecode(storedData));
      } else {
        throw Exception('No internet connection and no local data found');
      }  
    } 
    
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
    if (demo) {
      if (postModel.id == "65745809f4df721b2f59bdb6") {
        return Future.delayed(const Duration(seconds: 4), () => "JavaScript is a versatile programming language that is used to add interactivity and dynamism to web pages. It is highly popular and widely used by developers due to its ability to create interactive and dynamic web experiences. JavaScript is especially well-regarded in the MIT community, where senior developers rely on its power to craft engaging web applications.\n\nThere are several reasons why JavaScript is so widely used. First, its versatility allows it to be used for a wide range of tasks, from creating menus and forms to building animations and games. Second, JavaScript has a thriving community of developers who constantly share their knowledge and build libraries and frameworks to make development easier. This strong community support keeps developers engaged and continuously improving their skills.\n\nFurthermore, JavaScript is constantly evolving, with new features and advancements being introduced. Some of the exciting developments in the field include WebAssembly, which brings near-native performance to web applications, and progressive web apps, which bridge the gap between web and native applications.\n\nIn conclusion, JavaScript is a powerful tool for creating interactive and dynamic web experiences. Its versatility, thriving community, and constant evolution make it an essential language for developers looking to code the future of web development.");
      }
    }

    return CIAService().createNotes(postModel);
  }

  Future<List<PostModel>> getUserExplorePosts(String userId) async {
    if (demo) {
      final storedData = await _localStorage.fetchData("getUserExplorePosts\$$userId");
      if (storedData != null) {
        return (jsonDecode(storedData) as List<dynamic>).map((e) => PostModel.fromJson(e)).toList();
      } else {
        throw Exception('No internet connection and no local data found');
      }
    }

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
    if (demo) {
      final storedData = await _localStorage.fetchData("getUserAuthoredPosts\$$userId");
      if (storedData != null) {
        return (jsonDecode(storedData) as List<dynamic>).map((e) => PostModel.fromJson(e)).toList();
      } else {
        throw Exception('No internet connection and no local data found');
      }
    }
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
