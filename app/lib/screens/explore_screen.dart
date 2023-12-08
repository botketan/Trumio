import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:moon_design/moon_design.dart';

class ExploreScreen extends StatefulWidget {
  const ExploreScreen({super.key});

  @override
  State<ExploreScreen> createState() => _ExploreScreenState();
}

class _ExploreScreenState extends State<ExploreScreen> {
  int selectedIndex = 0;

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
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(
              height: 50.0,
            ),
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
                      child: SvgPicture.asset("assets/recommended_icon.svg",
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
                      child: SvgPicture.asset("assets/trending_icon.svg",
                          width: 18.0,
                          color: (selectedIndex == 2)
                              ? Colors.white
                              : const Color(0xFF0578FB)),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
