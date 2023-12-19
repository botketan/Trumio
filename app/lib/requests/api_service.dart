import 'package:dio/dio.dart';

class ApiService {
  final Dio _dio;

  static const String _baseUrl = "http://localhost:5000/";

  ApiService() : _dio = Dio(BaseOptions(baseUrl: _baseUrl)) {}

  Future<Response> get(String endpoint) async {
    try {
      final response = await _dio.get(endpoint);
      return response;
    } on DioException catch (e) {
      throw e;
    }
  }

  Future<Response> post(String endpoint, Map<String, dynamic> data) async {
    try {
      final response = await _dio.post(endpoint, data: data);
      return response;
    } on DioException catch (e) {
      print(e);
      throw e;
    }
  }

}

