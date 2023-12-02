import 'package:app/widgets/achievements_list_widget.dart';
import 'package:app/widgets/badges_widget.dart';
import 'package:app/widgets/ci_agents_list_widget.dart';
import 'package:app/widgets/divider_widget.dart';
import 'package:app/widgets/milestone_tracker_widget.dart';
import 'package:app/widgets/new_tier_widget.dart';
import 'package:app/widgets/notes_list_widget.dart';
import 'package:app/widgets/profile_card.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          ListView(
            children: [
              Stack(
                children: [
                  Image.asset(
                    'assets/profile_bg.png',
                    fit: BoxFit.cover,
                    height: 195.0,
                    width: double.infinity,
                  ),
                  const Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      SizedBox(
                        height: 112.0,
                      ),
                      ProfileCard(),
                      SizedBox(
                        height: 24.0,
                      ),
                      NextTierWidget(),
                      SizedBox(
                        height: 24.0,
                      ),
                      DividerWidget(),
                      SizedBox(
                        height: 24.0,
                      ),
                      BadgesWidget(),
                      SizedBox(
                        height: 24.0,
                      ),
                      AchievementsListWidget(),
                      SizedBox(
                        height: 24.0,
                      ),
                      DividerWidget(),
                      SizedBox(
                        height: 24.0,
                      ),
                      CIAgentsListWidget(),
                      SizedBox(
                        height: 24.0,
                      ),
                      DividerWidget(),
                      SizedBox(
                        height: 24.0,
                      ),
                      NotesListWidget(),
                      SizedBox(
                        height: 24.0,
                      ),
                      DividerWidget(),
                      SizedBox(
                        height: 24.0,
                      ),
                      MilestoneTrackerWidget(),
                      SizedBox(
                        height: 200.0,
                      ),
                    ],
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

