import 'package:app/models/post_model.dart';
import 'package:app/models/user_model.dart';
import 'package:app/utils/app_data_layer.dart';
import 'package:app/widgets/post_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:moon_design/moon_design.dart';

class ExploreScreen extends StatefulWidget {
  String? localCommunity;
  String? channelName;
  ExploreScreen({super.key, this.localCommunity, this.channelName});

  @override
  State<ExploreScreen> createState() => _ExploreScreenState();
}

class _ExploreScreenState extends State<ExploreScreen> {
  final String _userId = "65645f987aa073e675de9071";
  int selectedIndex = 0;
  List<PostModel> posts = [];
  List<UserModel> users = [];

  void setSelectedIndex(int ind) {
    if (selectedIndex != ind) {
      setState(() {
        selectedIndex = ind;
      });
    }
  }

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) async {
      posts = await AppDataLayer().getUserExplorePosts(_userId);
      users = [];
      for (int i = 0; i < posts.length; i++) {
        users.add(await AppDataLayer().getUserData(posts[i].userId!));
      }
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        padding: EdgeInsets.zero,
        children: [
          if (widget.localCommunity != null)
            Stack(
              children: [
                Image.asset(
                  "assets/local_community.png",
                  width: double.infinity,
                  height: 150.0,
                  fit: BoxFit.cover,
                ),
                SizedBox(
                  height: 150.0,
                  child: Column(
                    children: [
                      const Spacer(),
                      Padding(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 16.0,
                          vertical: 16.0,
                        ),
                        child: Text(
                          widget.localCommunity!,
                          style: const TextStyle(
                            fontFamily: "DMSans",
                            fontSize: 18.0,
                            fontWeight: FontWeight.w600,
                            color: Colors.black,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          if (widget.localCommunity != null)
            Padding(
              padding: const EdgeInsets.only(left: 16.0),
              child: MoonMenuItem(
                menuItemPadding: const EdgeInsets.only(top: 2.0),
                title: Padding(
                  padding: const EdgeInsets.only(left: 12.0),
                  child: Text(
                    widget.channelName!,
                    style: const TextStyle(
                      fontFamily: "DMSans",
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                      color: Colors.black,
                    ),
                  ),
                ),
                leading: Padding(
                  padding: const EdgeInsets.only(left: 8.0),
                  child: Container(
                    height: 24.0,
                    width: 24.0,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(4.0),
                      border: Border.all(
                        color: const Color(0xFFD9D9D9),
                        width: 1.0,
                      ),
                    ),
                    child: const Center(
                      child: Text(
                        "#",
                        style: TextStyle(
                          fontFamily: "DMSans",
                          fontSize: 10,
                          fontWeight: FontWeight.w700,
                          color: Colors.black,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          SafeArea(
            child: Padding(
              padding:
                  const EdgeInsets.symmetric(horizontal: 16.0, vertical: 4.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  if (widget.localCommunity == null)
                    Center(
                      child: MoonSegmentedControl(
                        height: 45.0,
                        backgroundColor: const Color(0xFFDBE8FA),
                        selectedIndex: selectedIndex,
                        segments: [
                          Segment(
                            segmentStyle: const SegmentStyle(
                              segmentBorderRadius: BorderRadius.all(
                                Radius.circular(
                                  8.0,
                                ),
                              ),
                              focusEffectColor: Color(0xFFDBE8FA),
                              selectedSegmentColor: Color(0xFF0578FB),
                              selectedTextColor: Colors.white,
                              textStyle: TextStyle(
                                fontFamily: "DMSans",
                                fontSize: 12.0,
                                fontWeight: FontWeight.w600,
                                color: Color(0xFF0578FB),
                              ),
                            ),
                            label: GestureDetector(
                              onTap: () => setSelectedIndex(0),
                              child: const Text(
                                "Recommended",
                              ),
                            ),
                            leading: GestureDetector(
                              onTap: () => setSelectedIndex(0),
                              child: SvgPicture.asset(
                                  "assets/recommended_icon.svg",
                                  width: 18.0,
                                  color: (selectedIndex == 0)
                                      ? Colors.white
                                      : const Color(0xFF0578FB)),
                            ),
                          ),
                          Segment(
                            segmentStyle: const SegmentStyle(
                              segmentBorderRadius: BorderRadius.all(
                                Radius.circular(
                                  8.0,
                                ),
                              ),
                              focusEffectColor: Color(0xFFDBE8FA),
                              selectedSegmentColor: Color(0xFF0578FB),
                              selectedTextColor: Colors.white,
                              textStyle: TextStyle(
                                fontFamily: "DMSans",
                                fontSize: 12.0,
                                fontWeight: FontWeight.w600,
                                color: Color(0xFF0578FB),
                              ),
                            ),
                            label: GestureDetector(
                              onTap: () => setSelectedIndex(1),
                              child: const Text(
                                "Recent",
                              ),
                            ),
                            leading: GestureDetector(
                              onTap: () => setSelectedIndex(1),
                              child: SvgPicture.asset("assets/recent_icon.svg",
                                  width: 18.0,
                                  color: (selectedIndex == 1)
                                      ? Colors.white
                                      : const Color(0xFF0578FB)),
                            ),
                          ),
                          Segment(
                            segmentStyle: const SegmentStyle(
                              segmentBorderRadius: BorderRadius.all(
                                Radius.circular(
                                  8.0,
                                ),
                              ),
                              focusEffectColor: Color(0xFFDBE8FA),
                              selectedSegmentColor: Color(0xFF0578FB),
                              selectedTextColor: Colors.white,
                              textStyle: TextStyle(
                                fontFamily: "DMSans",
                                fontSize: 12.0,
                                fontWeight: FontWeight.w600,
                                color: Color(0xFF0578FB),
                              ),
                            ),
                            label: GestureDetector(
                              onTap: () => setSelectedIndex(2),
                              child: const Text(
                                "Trending",
                              ),
                            ),
                            leading: GestureDetector(
                              onTap: () => setSelectedIndex(2),
                              child: SvgPicture.asset(
                                  "assets/trending_icon.svg",
                                  width: 18.0,
                                  color: (selectedIndex == 2)
                                      ? Colors.white
                                      : const Color(0xFF0578FB)),
                            ),
                          ),
                        ],
                      ),
                    ),
                  if (widget.localCommunity == null)
                    const SizedBox(
                      height: 16.0,
                    ),
                  if (posts.isEmpty)
                    const Center(
                      child: CircularProgressIndicator(),
                    ),
                  ..._buildPosts(),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  List<Widget> _buildPosts() {
    List<Widget> postWidgets = [];
    for (int i = 0; i < posts.length; i++) {
      postWidgets.add(
        PostWidget(
          post: posts[i],
          userModel: users[i],
        ),
      );
      postWidgets.add(
        const SizedBox(
          height: 16.0,
        ),
      );
    }
    return postWidgets;
  }
}
