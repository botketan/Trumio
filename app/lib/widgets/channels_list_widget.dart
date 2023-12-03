import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:moon_design/moon_design.dart';

class ChannelsListWidget extends StatelessWidget {
  const ChannelsListWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 8.0),
            child: Text(
              "Channels",
              style: TextStyle(
                fontFamily: "DMSans",
                fontSize: 14,
                fontWeight: FontWeight.w500,
                color: Color(0xFF595D62),
              ),
            ),
          ),
          const SizedBox(
            height: 8.0,
          ),
          MoonMenuItem(
            menuItemPadding: const EdgeInsets.only(top: 2.0),
            title: const Padding(
              padding: EdgeInsets.only(left: 12.0),
              child: Text(
                "general",
                style: TextStyle(
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
            trailing: Padding(
              padding: const EdgeInsets.only(right: 8.0),
              child: Container(
                height: 24.0,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(999.0),
                  color: const Color(0xFFE1EEFE),
                ),
                child: const Padding(
                  padding: EdgeInsets.symmetric(
                    horizontal: 12.0,
                    vertical: 4.0,
                  ),
                  child: Text(
                    "03",
                    style: TextStyle(
                      fontFamily: "DMSans",
                      fontSize: 12,
                      fontWeight: FontWeight.w600,
                      color: Color(0xFF0578FB),
                    ),
                  ),
                ),
              ),
            ),
          ),
          MoonMenuItem(
            menuItemPadding: const EdgeInsets.only(top: 2.0),
            title: const Padding(
              padding: EdgeInsets.only(left: 12.0),
              child: Text(
                "bug-fixes",
                style: TextStyle(
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
                    "@",
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
            trailing: Padding(
              padding: const EdgeInsets.only(right: 8.0),
              child: Container(
                height: 24.0,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(999.0),
                  color: const Color(0xFFE1EEFE),
                ),
                child: const Padding(
                  padding: EdgeInsets.symmetric(
                    horizontal: 12.0,
                    vertical: 4.0,
                  ),
                  child: Text(
                    "01",
                    style: TextStyle(
                      fontFamily: "DMSans",
                      fontSize: 12,
                      fontWeight: FontWeight.w600,
                      color: Color(0xFF0578FB),
                    ),
                  ),
                ),
              ),
            ),
          ),
          MoonMenuItem(
            menuItemPadding: const EdgeInsets.only(top: 2.0),
            title: const Padding(
              padding: EdgeInsets.only(left: 12.0),
              child: Text(
                "bangalore",
                style: TextStyle(
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
          MoonMenuItem(
            menuItemPadding: const EdgeInsets.only(top: 2.0),
            title: const Padding(
              padding: EdgeInsets.only(left: 12.0),
              child: Text(
                "cyber-security",
                style: TextStyle(
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
          MoonMenuItem(
            menuItemPadding: const EdgeInsets.only(top: 2.0),
            title: const Padding(
              padding: EdgeInsets.only(left: 12.0),
              child: Text(
                "freelancing",
                style: TextStyle(
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
                    "@",
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
          MoonMenuItem(
            menuItemPadding: const EdgeInsets.only(top: 2.0),
            title: const Padding(
              padding: EdgeInsets.only(left: 12.0),
              child: Text(
                "alum23",
                style: TextStyle(
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
          MoonMenuItem(
            menuItemPadding: const EdgeInsets.only(top: 2.0),
            title: const Padding(
              padding: EdgeInsets.only(left: 12.0),
              child: Text(
                "all-alum",
                style: TextStyle(
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
          const SizedBox(
            height: 8.0,
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 4.0),
            child: MoonButton(
              onTap: () {},
              height: 40.0,
              width: double.infinity,
              backgroundColor: const Color(0xFFE1EEFE),
              label: const Text(
                "Discover Channels",
                style: TextStyle(
                  fontFamily: "DMSans",
                  fontSize: 14,
                  fontWeight: FontWeight.w600,
                  color: Color(0xFF0578FB),
                ),
              ),
              leading: SvgPicture.asset(
                "assets/compose_icon.svg",
                height: 24.0,
                width: 24.0,
                color: const Color(0xFF0578FB),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

