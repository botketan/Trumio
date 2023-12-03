import 'package:flutter/material.dart';
import 'package:moon_design/moon_design.dart';

class MembersListWidget extends StatelessWidget {
  const MembersListWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 4.0),
            child: Row(
              children: [
                const SizedBox(
                  width: 4.0,
                ),
                const Text(
                  "Members",
                  style: TextStyle(
                    fontFamily: "DMSans",
                    fontSize: 14,
                    fontWeight: FontWeight.w500,
                    color: Color(0xFF595D62),
                  ),
                ),
                const Spacer(),
                MoonTextButton(
                  onTap: () {},
                  height: 24.0,
                  label: const Text('View All',
                      style: TextStyle(
                        fontFamily: "DMSans",
                        fontWeight: FontWeight.w600,
                        fontSize: 12.0,
                        color: Color(0xFF0578FB),
                      )),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(4.0),
                  ),
                ),
              ],
            ),
          ),
          Card(
            color: Colors.white,
            surfaceTintColor: Colors.white,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(4.0),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const SizedBox(
                  height: 12.0,
                ),
                Row(
                  children: [
                    const SizedBox(
                      width: 12.0,
                    ),
                    Expanded(
                      child: Container(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(4.0),
                          border: Border.all(
                            color: const Color(0xFFE2E2E2),
                            width: 1.0,
                          ),
                        ),
                        child: const Padding(
                          padding: EdgeInsets.symmetric(
                              horizontal: 14.0, vertical: 8.0),
                          child: Column(
                            crossAxisAlignment:
                                CrossAxisAlignment.start,
                            children: [
                              Text(
                                "2,248",
                                style: TextStyle(
                                  fontFamily: "DMSans",
                                  fontSize: 14,
                                  fontWeight: FontWeight.w600,
                                  color: Colors.black,
                                ),
                              ),
                              SizedBox(
                                height: 2.0,
                              ),
                              Text(
                                "Members",
                                style: TextStyle(
                                  fontFamily: "DMSans",
                                  fontSize: 12,
                                  fontWeight: FontWeight.w500,
                                  color: Color(0xFF595D62),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(
                      width: 8.0,
                    ),
                    Expanded(
                      child: Container(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(4.0),
                          border: Border.all(
                            color: const Color(0xFFE2E2E2),
                            width: 1.0,
                          ),
                        ),
                        child: const Padding(
                          padding: EdgeInsets.symmetric(
                              horizontal: 14.0, vertical: 8.0),
                          child: Column(
                            crossAxisAlignment:
                                CrossAxisAlignment.start,
                            children: [
                              Text(
                                "1,378",
                                style: TextStyle(
                                  fontFamily: "DMSans",
                                  fontSize: 14,
                                  fontWeight: FontWeight.w600,
                                  color: Colors.black,
                                ),
                              ),
                              SizedBox(
                                height: 2.0,
                              ),
                              Text(
                                "Organizations",
                                style: TextStyle(
                                  fontFamily: "DMSans",
                                  fontSize: 12,
                                  fontWeight: FontWeight.w500,
                                  color: Color(0xFF595D62),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(
                      width: 12.0,
                    ),
                  ],
                ),
                const SizedBox(
                  height: 12.0,
                ),
                SizedBox(
                  height: 48.0,
                  child: ListView(
                    padding: EdgeInsets.zero,
                    scrollDirection: Axis.horizontal,
                    children: [
                      const SizedBox(
                        width: 16.0,
                      ),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(48.0),
                        child: Container(
                          height: 48.0,
                          width: 48.0,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(48.0),
                            border: Border.all(
                              color: const Color(0xFFE2E2E2),
                              width: 1.0,
                            ),
                          ),
                          child: Image.asset(
                            "assets/avatar.png",
                            height: 48.0,
                            width: 48.0,
                          ),
                        ),
                      ),
                      const SizedBox(
                        width: 8.0,
                      ),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(48.0),
                        child: Container(
                          height: 48.0,
                          width: 48.0,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(48.0),
                            color: const Color(0xFFE1EEFE),
                          ),
                          child: const Center(
                            child: Text(
                              "DF",
                              style: TextStyle(
                                fontFamily: "DMSans",
                                fontSize: 14,
                                fontWeight: FontWeight.w600,
                                color: Color(0xFF0578FB),
                              ),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(
                        width: 8.0,
                      ),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(48.0),
                        child: Container(
                          height: 48.0,
                          width: 48.0,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(48.0),
                            border: Border.all(
                              color: const Color(0xFFE2E2E2),
                              width: 1.0,
                            ),
                          ),
                          child: Image.asset(
                            "assets/avatar_1.png",
                            height: 48.0,
                            width: 48.0,
                          ),
                        ),
                      ),
                      const SizedBox(
                        width: 8.0,
                      ),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(48.0),
                        child: Container(
                          height: 48.0,
                          width: 48.0,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(48.0),
                            border: Border.all(
                              color: const Color(0xFFE2E2E2),
                              width: 1.0,
                            ),
                          ),
                          child: Image.asset(
                            "assets/avatar.png",
                            height: 48.0,
                            width: 48.0,
                          ),
                        ),
                      ),
                      const SizedBox(
                        width: 8.0,
                      ),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(48.0),
                        child: Container(
                          height: 48.0,
                          width: 48.0,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(48.0),
                            color: const Color(0xFFE1EEFE),
                          ),
                          child: const Center(
                            child: Text(
                              "SN",
                              style: TextStyle(
                                fontFamily: "DMSans",
                                fontSize: 14,
                                fontWeight: FontWeight.w600,
                                color: Color(0xFF0578FB),
                              ),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(
                        width: 8.0,
                      ),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(48.0),
                        child: Container(
                          height: 48.0,
                          width: 48.0,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(48.0),
                            color: const Color(0xFFE1EEFE),
                          ),
                          child: const Center(
                            child: Text(
                              "HS",
                              style: TextStyle(
                                fontFamily: "DMSans",
                                fontSize: 14,
                                fontWeight: FontWeight.w600,
                                color: Color(0xFF0578FB),
                              ),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(
                        width: 8.0,
                      ),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(48.0),
                        child: Container(
                          height: 48.0,
                          width: 48.0,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(48.0),
                            border: Border.all(
                              color: const Color(0xFFE2E2E2),
                              width: 1.0,
                            ),
                          ),
                          child: Image.asset(
                            "assets/avatar.png",
                            height: 48.0,
                            width: 48.0,
                          ),
                        ),
                      ),
                      const SizedBox(
                        width: 8.0,
                      ),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(48.0),
                        child: Container(
                          height: 48.0,
                          width: 48.0,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(48.0),
                            color: const Color(0xFFE1EEFE),
                          ),
                          child: const Center(
                            child: Text(
                              "VS",
                              style: TextStyle(
                                fontFamily: "DMSans",
                                fontSize: 14,
                                fontWeight: FontWeight.w600,
                                color: Color(0xFF0578FB),
                              ),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(
                        width: 16.0,
                      ),
                    ],
                  ),
                ),
                const SizedBox(
                  height: 12.0,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

