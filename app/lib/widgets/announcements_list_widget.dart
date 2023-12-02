import 'package:flutter/material.dart';
import 'package:moon_design/moon_design.dart';

class AnnouncementsListWidget extends StatelessWidget {
  const AnnouncementsListWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          child: Row(
            children: [
              const SizedBox(
                width: 4.0,
              ),
              const Text(
                "Announcements",
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
              const SizedBox(
                width: 4.0,
              ),
            ],
          ),
        ),
        const SizedBox(
          height: 8.0,
        ),
        SizedBox(
          height: 132.0,
          child: ListView(
            padding: EdgeInsets.zero,
            scrollDirection: Axis.horizontal,
            children: [
              const SizedBox(
                width: 16.0,
              ),
              SizedBox(
                width: 342.0,
                height: 132.0,
                child: Card(
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
                          Image.asset(
                            "assets/avatar.png",
                            height: 40.0,
                            width: 40.0,
                          ),
                          const SizedBox(
                            width: 8.0,
                          ),
                          const Column(
                            crossAxisAlignment:
                                CrossAxisAlignment.start,
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                "Vidya Sagar",
                                style: TextStyle(
                                  fontFamily: "DMSans",
                                  fontSize: 12,
                                  fontWeight: FontWeight.w600,
                                  color: Colors.black,
                                ),
                              ),
                              SizedBox(
                                height: 2.0,
                              ),
                              Text(
                                "2 hours ago",
                                style: TextStyle(
                                  fontFamily: "DMSans",
                                  fontSize: 12,
                                  fontWeight: FontWeight.w500,
                                  color: Color(0x66000000),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 8.0,
                      ),
                      const Padding(
                        padding: EdgeInsets.symmetric(horizontal: 12.0),
                        child: Text(
                          "Morbi at nunc interdum, laoreet dolor vel, congue felis. Pellentesque pretium quam nec fringilla iaculis. Nullam lectus leo, condimentum ut iaculis facilisis,",
                          maxLines: 3,
                          overflow: TextOverflow.ellipsis,
                          style: TextStyle(
                            fontFamily: "DMSans",
                            fontSize: 12,
                            fontWeight: FontWeight.w500,
                            color: Color(0xB2000000),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(
                width: 12.0,
              ),
              SizedBox(
                width: 342.0,
                height: 132.0,
                child: Card(
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
                          Image.asset(
                            "assets/avatar.png",
                            height: 40.0,
                            width: 40.0,
                          ),
                          const SizedBox(
                            width: 8.0,
                          ),
                          const Column(
                            crossAxisAlignment:
                                CrossAxisAlignment.start,
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                "Vidya Sagar",
                                style: TextStyle(
                                  fontFamily: "DMSans",
                                  fontSize: 12,
                                  fontWeight: FontWeight.w600,
                                  color: Colors.black,
                                ),
                              ),
                              SizedBox(
                                height: 2.0,
                              ),
                              Text(
                                "2 hours ago",
                                style: TextStyle(
                                  fontFamily: "DMSans",
                                  fontSize: 12,
                                  fontWeight: FontWeight.w500,
                                  color: Color(0x66000000),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 8.0,
                      ),
                      const Padding(
                        padding: EdgeInsets.symmetric(horizontal: 12.0),
                        child: Text(
                          "Morbi at nunc interdum, laoreet dolor vel, congue felis. Pellentesque pretium quam nec fringilla iaculis. Nullam lectus leo, condimentum ut iaculis facilisis,",
                          maxLines: 3,
                          overflow: TextOverflow.ellipsis,
                          style: TextStyle(
                            fontFamily: "DMSans",
                            fontSize: 12,
                            fontWeight: FontWeight.w500,
                            color: Color(0xB2000000),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(
                width: 16.0,
              ),
            ],
          ),
        ),
      ],
    );
  }
}
