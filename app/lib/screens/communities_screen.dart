import 'package:app/widgets/announcements_list_widget.dart';
import 'package:app/widgets/channels_list_widget.dart';
import 'package:app/widgets/community_widget.dart';
import 'package:app/widgets/divider_widget.dart';
import 'package:app/widgets/members_list_widget.dart';
import 'package:flutter/material.dart';

class CommunitiesScreen extends StatelessWidget {
  const CommunitiesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: ListView(
          padding: EdgeInsets.zero,
          children: [
            const SizedBox(
              height: 8.0,
            ),
            SizedBox(
              height: 42.0,
              child: ListView(
                padding: EdgeInsets.zero,
                scrollDirection: Axis.horizontal,
                children: [
                  const SizedBox(
                    width: 8.0,
                  ),
                  Card(
                    elevation: 1.0,
                    margin: EdgeInsets.zero,
                    shape: const CircleBorder(),
                    color: Colors.white,
                    surfaceTintColor: Colors.white,
                    child: Center(
                      child: Padding(
                        padding: const EdgeInsets.all(4.0),
                        child: Image.asset(
                          "assets/avatar_1.png",
                          height: 32.0,
                          width: 32.0,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                  Card(
                    elevation: 1.0,
                    margin: EdgeInsets.zero,
                    shape: const CircleBorder(),
                    color: Colors.white,
                    surfaceTintColor: Colors.white,
                    child: Center(
                      child: Padding(
                        padding: const EdgeInsets.all(4.0),
                        child: Image.asset(
                          "assets/avatar_1.png",
                          height: 32.0,
                          width: 32.0,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                  Center(
                    child: SizedBox(
                      height: 40.0,
                      child: Card(
                        elevation: 1.0,
                        margin: EdgeInsets.zero,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20.0),
                        ),
                        color: Colors.white,
                        surfaceTintColor: Colors.white,
                        child: Row(
                          children: [
                            Center(
                              child: Padding(
                                padding: const EdgeInsets.all(4.0),
                                child: Image.asset(
                                  "assets/avatar_1.png",
                                  height: 32.0,
                                  width: 32.0,
                                ),
                              ),
                            ),
                            const SizedBox(
                              width: 8.0,
                            ),
                            const Text(
                              "Coding Club, MIT",
                              style: TextStyle(
                                fontFamily: "DMSans",
                                fontSize: 14,
                                fontWeight: FontWeight.w500,
                                color: Colors.black,
                              ),
                            ),
                            const SizedBox(
                              width: 12.0,
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                  Card(
                    elevation: 1.0,
                    margin: EdgeInsets.zero,
                    shape: const CircleBorder(),
                    color: Colors.white,
                    surfaceTintColor: Colors.white,
                    child: Center(
                      child: Padding(
                        padding: const EdgeInsets.all(4.0),
                        child: Image.asset(
                          "assets/avatar_1.png",
                          height: 32.0,
                          width: 32.0,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                  Card(
                    elevation: 1.0,
                    margin: EdgeInsets.zero,
                    shape: const CircleBorder(),
                    color: Colors.white,
                    surfaceTintColor: Colors.white,
                    child: Center(
                      child: Padding(
                        padding: const EdgeInsets.all(4.0),
                        child: Image.asset(
                          "assets/avatar_1.png",
                          height: 32.0,
                          width: 32.0,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                  Card(
                    elevation: 1.0,
                    margin: EdgeInsets.zero,
                    shape: const CircleBorder(),
                    color: Colors.white,
                    surfaceTintColor: Colors.white,
                    child: Center(
                      child: Padding(
                        padding: const EdgeInsets.all(4.0),
                        child: Image.asset(
                          "assets/avatar_1.png",
                          height: 32.0,
                          width: 32.0,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                  Card(
                    elevation: 1.0,
                    margin: EdgeInsets.zero,
                    shape: const CircleBorder(),
                    color: Colors.white,
                    surfaceTintColor: Colors.white,
                    child: Center(
                      child: Padding(
                        padding: const EdgeInsets.all(4.0),
                        child: Image.asset(
                          "assets/avatar_1.png",
                          height: 32.0,
                          width: 32.0,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                  Card(
                    elevation: 1.0,
                    margin: EdgeInsets.zero,
                    shape: const CircleBorder(),
                    color: Colors.white,
                    surfaceTintColor: Colors.white,
                    child: Center(
                      child: Padding(
                        padding: const EdgeInsets.all(4.0),
                        child: Image.asset(
                          "assets/avatar_1.png",
                          height: 32.0,
                          width: 32.0,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                  Card(
                    elevation: 1.0,
                    margin: EdgeInsets.zero,
                    shape: const CircleBorder(),
                    color: Colors.white,
                    surfaceTintColor: Colors.white,
                    child: Center(
                      child: Padding(
                        padding: const EdgeInsets.all(4.0),
                        child: Image.asset(
                          "assets/avatar_1.png",
                          height: 32.0,
                          width: 32.0,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8.0,
                  ),
                ],
              ),
            ),
            const SizedBox(
              height: 20.0,
            ),
            const AnnouncementsListWidget(),
            const SizedBox(
              height: 20.0,
            ),
            const DividerWidget(),
            const SizedBox(
              height: 20.0,
            ),
            const ChannelsListWidget(),
            const SizedBox(
              height: 20.0,
            ),
            const DividerWidget(),
            const SizedBox(
              height: 20.0,
            ),
            const MembersListWidget(),
            const SizedBox(
              height: 20.0,
            ),
            const DividerWidget(),
            const SizedBox(
              height: 20.0,
            ),
            const CommunityWidget(),
            const SizedBox(
              height: 200.0,
            ),
          ],
        ),
      ),
    );
  }
}

