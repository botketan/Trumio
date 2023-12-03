import 'package:flutter/material.dart';
import 'package:moon_design/moon_design.dart';

class MilestoneWidget extends StatefulWidget {
  const MilestoneWidget({
    super.key,
  });

  @override
  State<MilestoneWidget> createState() => _MilestoneWidgetState();
}

class _MilestoneWidgetState extends State<MilestoneWidget> {
  bool _isExpanded = true;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 8.0),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(4.0),
          border: Border.all(
            color: const Color(0xFFE2E2E2),
          ),
        ),
        child: Column(
          children: [
            const SizedBox(
              height: 8.0,
            ),
            Row(
              children: [
                IconButton(
                  padding: const EdgeInsets.all(0),
                  onPressed: () {
                    setState(() {
                      _isExpanded = !_isExpanded;
                    });
                  },
                  icon: Icon(
                    (_isExpanded)
                        ? Icons.keyboard_arrow_down
                        : Icons.keyboard_arrow_right,
                    size: 20.0,
                  ),
                  iconSize: 20.0,
                  color: const Color(0xFF707070),
                ),
                const Text(
                  "Milestone 1: UI Design",
                  style: TextStyle(
                    fontFamily: "DMSans",
                    fontWeight: FontWeight.w500,
                    fontSize: 14.0,
                    color: Color(0xFF595D62),
                  ),
                ),
                const Spacer(),
                const Text(
                  "3/4 Tasks",
                  style: TextStyle(
                    fontFamily: "DMSans",
                    fontWeight: FontWeight.w600,
                    fontSize: 14.0,
                    color: Colors.black,
                  ),
                ),
                const SizedBox(
                  width: 8.0,
                ),
                MoonTag(
                  borderRadius: BorderRadius.circular(4.0),
                  backgroundColor: const Color(0xFFE5EFE6),
                  height: 24.0,
                  label: const Text(
                    "ON TRACK",
                    style: TextStyle(
                      fontFamily: "DMSans",
                      fontWeight: FontWeight.w700,
                      fontSize: 10.0,
                      color: Color(0xFF2E7D32),
                    ),
                  ),
                ),
                const SizedBox(
                  width: 8.0,
                ),
              ],
            ),
            const SizedBox(
              height: 8.0,
            ),
            if(_isExpanded) Column(
              children: [
                Row(
                  children: [
                    const SizedBox(
                      width: 24.0,
                    ),
                    MoonCheckbox(
                      value: true,
                      onChanged: (val) {},
                      activeColor: const Color(0xFF4E46B4),
                      tapAreaSizeValue: 24.0,
                    ),
                    const SizedBox(
                      width: 8.0,
                    ),
                    const Text(
                      "Finalize App Wireframes",
                      style: TextStyle(
                        fontFamily: "DMSans",
                        fontWeight: FontWeight.w500,
                        fontSize: 16.0,
                        color: Colors.black,
                      ),
                    ),
                  ],
                ),
                const SizedBox(
                  height: 8.0,
                ),
                // Row(
                //   children: [
                //     const SizedBox(
                //       width: 56.0,
                //     ),
                //     Container(
                //       width: 214.0,
                //       decoration: BoxDecoration(
                //         borderRadius: BorderRadius.circular(4.0),
                //         border: Border.all(
                //           color: const Color(0xFFE2E2E2),
                //         ),
                //       ),
                //       child: const Column(
                //         crossAxisAlignment: CrossAxisAlignment.start,
                //         children: [
                //           SizedBox(
                //             height: 4.0,
                //           ),
                //           Padding(
                //             padding: EdgeInsets.symmetric(horizontal: 8.0),
                //             child: Text(
                //               "Create and finalize the wireframe designs for all app screens",
                //               style: TextStyle(
                //                 fontFamily: "DMSans",
                //                 fontWeight: FontWeight.w500,
                //                 fontSize: 12.0,
                //                 color: Color(0xFF595D62),
                //               ),
                //             ),
                //           ),
                //           SizedBox(
                //             height: 12.0,
                //           ),
                //           Padding(
                //             padding: EdgeInsets.symmetric(horizontal: 8.0),
                //             child: Text(
                //               "Completed on 28 Nov, 2023",
                //               style: TextStyle(
                //                 fontFamily: "DMSans",
                //                 fontWeight: FontWeight.w500,
                //                 fontSize: 12.0,
                //                 color: Color(0xFF595D62),
                //               ),
                //             ),
                //           ),
                //           SizedBox(
                //             height: 4.0,
                //           ),
                //         ],
                //       ),
                //     ),
                //   ],
                // ),
                // const SizedBox(
                //   height: 44.0,
                // ),
                Row(
                  children: [
                    const SizedBox(
                      width: 24.0,
                    ),
                    MoonCheckbox(
                      value: true,
                      onChanged: (val) {},
                      activeColor: const Color(0xFF4E46B4),
                      tapAreaSizeValue: 24.0,
                    ),
                    const SizedBox(
                      width: 8.0,
                    ),
                    const Text(
                      "Finalize App Wireframes",
                      style: TextStyle(
                        fontFamily: "DMSans",
                        fontWeight: FontWeight.w500,
                        fontSize: 16.0,
                        color: Colors.black,
                      ),
                    ),
                  ],
                ),
                const SizedBox(
                  height: 8.0,
                ),
                Row(
                  children: [
                    const SizedBox(
                      width: 24.0,
                    ),
                    MoonCheckbox(
                      value: false,
                      onChanged: (val) {},
                      activeColor: const Color(0xFF4E46B4),
                      tapAreaSizeValue: 24.0,
                    ),
                    const SizedBox(
                      width: 8.0,
                    ),
                    const Text(
                      "Finalize App Wireframes",
                      style: TextStyle(
                        fontFamily: "DMSans",
                        fontWeight: FontWeight.w500,
                        fontSize: 16.0,
                        color: Colors.black,
                      ),
                    ),
                  ],
                ),
                const SizedBox(
                  height: 12.0,
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
