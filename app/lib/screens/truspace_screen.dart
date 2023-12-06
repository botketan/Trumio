import 'dart:convert';

import 'package:app/models/user_model.dart';
import 'package:app/requests/user_api_service.dart';
import 'package:app/widgets/achievements_list_widget.dart';
import 'package:app/widgets/badges_widget.dart';
import 'package:app/widgets/ci_agents_list_widget.dart';
import 'package:app/widgets/divider_widget.dart';
import 'package:app/widgets/milestone_tracker_widget.dart';
import 'package:app/widgets/new_tier_widget.dart';
import 'package:app/widgets/notes_list_widget.dart';
import 'package:app/widgets/profile_card.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class TruspaceScreen extends StatefulWidget {
  const TruspaceScreen({super.key});

  @override
  State<TruspaceScreen> createState() => _TruspaceScreenState();
}

class _TruspaceScreenState extends State<TruspaceScreen> {
  bool _loading = true;
  late UserModel _userModel;
  final String _userId = "65645f987aa073e675de9071";
  final FlutterSecureStorage storage = FlutterSecureStorage();

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) async {
      String? check = await storage.read(key: "user");

      if (check != null) {
        _userModel = UserModel.fromJson(jsonDecode(check));
        setState(() {
          _loading = false;
        });
      }

      _userModel = await UserService().getUserData(_userId);
      await storage.write(key: "user", value: json.encode(_userModel.toJson()));
      
      setState(() {
        _loading = false;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Center(
        child: CircularProgressIndicator(),
      );
    }

    return Scaffold(
      body: ListView(
        children: [
          Stack(
            children: [
              Image.asset(
                'assets/profile_bg.png',
                fit: BoxFit.cover,
                height: 195.0,
                width: double.infinity,
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const SizedBox(
                    height: 112.0,
                  ),
                  ProfileCard(
                    userModel: _userModel,
                  ),
                  const SizedBox(
                    height: 24.0,
                  ),
                  NextTierWidget(
                    userModel: _userModel,
                  ),
                  const SizedBox(
                    height: 24.0,
                  ),
                  const DividerWidget(),
                  const SizedBox(
                    height: 24.0,
                  ),
                  const BadgesWidget(),
                  const SizedBox(
                    height: 24.0,
                  ),
                  const AchievementsListWidget(),
                  const SizedBox(
                    height: 24.0,
                  ),
                  const DividerWidget(),
                  const SizedBox(
                    height: 24.0,
                  ),
                  CIAgentsListWidget(
                    ciaChats: _userModel.chats,
                  ),
                  const SizedBox(
                    height: 24.0,
                  ),
                  const DividerWidget(),
                  const SizedBox(
                    height: 24.0,
                  ),
                  const NotesListWidget(),
                  const SizedBox(
                    height: 24.0,
                  ),
                  const DividerWidget(),
                  const SizedBox(
                    height: 24.0,
                  ),
                  if (_userModel.projects.isNotEmpty) MilestoneTrackerWidget(
                    projects: _userModel.projects,
                  ),
                  const SizedBox(
                    height: 200.0,
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
