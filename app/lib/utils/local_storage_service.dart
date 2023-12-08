import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class LocalStorageService {
  final _storage = FlutterSecureStorage();

  Future<void> storeData(String key, String value) async {
    await _storage.write(key: key, value: value);
  }

  Future<String?> fetchData(String key) async {
    return await _storage.read(key: key);
  }
}
