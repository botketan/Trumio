import 'package:app/models/post_model.dart';
import 'package:dio/dio.dart';

import 'api_service.dart';

class PostService extends ApiService {
  PostService() : super();

  Future<List<PostModel>> getUserExplorePosts(String userId) async {
    Response response = await post("/post/getALLPost/", {"userId": userId});
    return (response.data as List<dynamic>)
        .map((e) => PostModel.fromJson(e))
        .toList();
  }

  Future<List<PostModel>> getUserAuthoredPosts(String userId) async {
    Response response = await post("/post/getByUserId/", {"userId": userId});
    return (response.data as List<dynamic>)
        .map((e) => PostModel.fromJson(e))
        .toList();
  }

}
