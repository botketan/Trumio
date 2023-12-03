import 'package:app/widgets/milestone_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class MilestoneTrackerWidget extends StatelessWidget {
  const MilestoneTrackerWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0),
      child: Container(
        width: double.infinity,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12.0),
          border: Border.all(color: const Color(0xFFE2E2E2)),
        ),
        child: Column(
          children: [
            const SizedBox(
              height: 12.0,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0),
              child: Row(
                children: [
                  Expanded(
                    child: Container(
                      height: 64.0,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(4.0),
                        border: Border.all(
                          color: const Color(0xFFE2E2E2),
                        ),
                      ),
                      child: Row(children: [
                        const SizedBox(
                          width: 16.0,
                        ),
                        const Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              "Project",
                              style: TextStyle(
                                fontFamily: "DMSans",
                                fontWeight: FontWeight.w500,
                                fontSize: 12.0,
                                color: Color(0xFF595D62),
                              ),
                            ),
                            Text(
                              "DevRev Research",
                              style: TextStyle(
                                fontFamily: "DMSans",
                                fontWeight: FontWeight.w600,
                                fontSize: 16.0,
                                color: Colors.black,
                              ),
                            ),
                          ],
                        ),
                        const Spacer(),
                        SvgPicture.asset(
                          "assets/controls_icon.svg",
                          width: 24.0,
                          color: Colors.black,
                        ),
                        const SizedBox(
                          width: 16.0,
                        ),
                      ]),
                    ),
                  ),
                  const SizedBox(
                    width: 12.0,
                  ),
                  Container(
                    height: 64.0,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(4.0),
                      border: Border.all(
                        color: const Color(0xFFE2E2E2),
                      ),
                    ),
                    child: const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 16.0),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            "Progress",
                            style: TextStyle(
                              fontFamily: "DMSans",
                              fontWeight: FontWeight.w500,
                              fontSize: 12.0,
                              color: Color(0xFF595D62),
                            ),
                          ),
                          Text(
                            "75%",
                            style: TextStyle(
                              fontFamily: "DMSans",
                              fontWeight: FontWeight.w600,
                              fontSize: 14.0,
                              color: Colors.black,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(
              height: 8.0,
            ),
            const MilestoneWidget(),
            const SizedBox(
              height: 8.0,
            ),
            const MilestoneWidget(),
            const SizedBox(
              height: 12.0,
            ),
          ],
        ),
      ),
    );
  }
}

