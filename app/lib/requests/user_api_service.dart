import 'package:app/models/user_model.dart';
import 'package:dio/dio.dart';

import 'api_service.dart';

class UserService extends ApiService {
  UserService() : super();

  Future<UserModel> getUserData(String userId) async {
    Response response = await post("/user/getUser/", {"userId": userId});
    return UserModel.fromJson(response.data);
  }

}
