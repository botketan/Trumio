import 'package:app/widgets/divider_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:moon_design/moon_design.dart';

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
                              "Your chip text",
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
            Column(
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
            ),
            const SizedBox(
              height: 20.0,
            ),
            const DividerWidget(),
            const SizedBox(
              height: 20.0,
            ),
            Padding(
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
            ),
            const SizedBox(
              height: 20.0,
            ),
            const DividerWidget(),
            const SizedBox(
              height: 20.0,
            ),
            Padding(
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
            ),
            const SizedBox(
              height: 20.0,
            ),
            const DividerWidget(),
            const SizedBox(
              height: 20.0,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 4.0),
                    child: Text(
                      "Community",
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
                  Container(
                    height: 160.0,
                    width: double.infinity,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(4.0),
                      image: const DecorationImage(
                        image: AssetImage("assets/cover_image.png"),
                        fit: BoxFit.cover,
                      ),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 16.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Spacer(),
                          Row(
                            children: [
                              const Text(
                                "Visit Coding Club's Community Page",
                                style: TextStyle(
                                  fontFamily: "DMSans",
                                  fontSize: 14,
                                  fontWeight: FontWeight.w700,
                                  color: Colors.white,
                                ),
                              ),
                              const SizedBox(
                                width: 6.0,
                              ),
                              SvgPicture.asset(
                                "assets/arrow_icon.svg",
                                width: 12.0,
                                color: Colors.white,
                              ),
                            ],
                          ),
                          const SizedBox(
                            height: 4.0,
                          ),
                          Row(
                            children: [
                              Container(
                                height: 6.0,
                                width: 6.0,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(6.0),
                                  color: const Color(0xB2FFFFFF),
                                ),
                              ),
                              const SizedBox(
                                width: 6.0,
                              ),
                              const Text(
                                "2 new posts",
                                style: TextStyle(
                                  fontFamily: "DMSans",
                                  fontSize: 12,
                                  fontWeight: FontWeight.w500,
                                  color: Color(0xB2FFFFFF),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(
                            height: 13.0,
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(
              height: 200.0,
            ),
          ],
        ),
      ),
    );
  }
}
