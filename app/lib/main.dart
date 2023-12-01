import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:moon_design/moon_design.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
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
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const SizedBox(
                        height: 112.0,
                      ),
                      Stack(
                        children: [
                          Padding(
                            padding: const EdgeInsets.only(top: 8.0),
                            child: SizedBox(
                              height: 216.0,
                              width: double.infinity,
                              child: Card(
                                elevation: 1.0,
                                color: Colors.white,
                                surfaceTintColor: Colors.white,
                                margin: const EdgeInsets.symmetric(
                                    horizontal: 16.0),
                                shape: RoundedRectangleBorder(
                                  side: const BorderSide(
                                      color: Color(0xFFE2E2E2), width: 1),
                                  borderRadius: BorderRadius.circular(12.0),
                                ),
                                child: Column(
                                  children: [
                                    Row(
                                      children: [
                                        const SizedBox(
                                          width: 92.0,
                                        ),
                                        const Column(
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: [
                                            SizedBox(
                                              height: 12.0,
                                            ),
                                            Text('Vidya Sagar',
                                                style: TextStyle(
                                                  fontFamily: "DMSans",
                                                  fontWeight: FontWeight.w600,
                                                  fontSize: 16.0,
                                                  color: Colors.black,
                                                )),
                                            Text('@vidya2242',
                                                style: TextStyle(
                                                  fontFamily: "DMSans",
                                                  fontWeight: FontWeight.w400,
                                                  fontSize: 12.0,
                                                  color: Color(0xFF595D62),
                                                )),
                                          ],
                                        ),
                                        const Spacer(),
                                        MoonTextButton(
                                          onTap: () {},
                                          height: 24.0,
                                          label: const Text('Edit',
                                              style: TextStyle(
                                                fontFamily: "DMSans",
                                                fontWeight: FontWeight.w600,
                                                fontSize: 12.0,
                                                color: Color(0xFF4E46B4),
                                              )),
                                          leading: SvgPicture.asset(
                                            'assets/edit_icon.svg',
                                            color: const Color(0xFF4E46B4),
                                            width: 16.0,
                                          ),
                                          decoration: BoxDecoration(
                                            borderRadius:
                                                BorderRadius.circular(4.0),
                                            color: const Color(0xFFE9E8F6),
                                          ),
                                        ),
                                        const SizedBox(
                                          width: 16.0,
                                        ),
                                      ],
                                    ),
                                    const SizedBox(
                                      height: 16.0,
                                    ),
                                    Row(
                                      children: [
                                        const SizedBox(
                                          width: 16.0,
                                        ),
                                        SvgPicture.asset(
                                          'assets/work_icon.svg',
                                          width: 16.0,
                                          color: const Color(0xFF595D62),
                                        ),
                                        const SizedBox(
                                          width: 4.0,
                                        ),
                                        const Text(
                                          "Software Developer",
                                          style: TextStyle(
                                            fontFamily: "DMSans",
                                            fontWeight: FontWeight.w400,
                                            fontSize: 14.0,
                                            color: Colors.black,
                                          ),
                                        ),
                                      ],
                                    ),
                                    const SizedBox(
                                      height: 4.0,
                                    ),
                                    Row(
                                      children: [
                                        const SizedBox(
                                          width: 16.0,
                                        ),
                                        SvgPicture.asset(
                                          'assets/school_icon.svg',
                                          width: 16.0,
                                          color: const Color(0xFF595D62),
                                        ),
                                        const SizedBox(
                                          width: 4.0,
                                        ),
                                        const Text(
                                          "Sophomore at BITS Pilani, Hyderabad",
                                          style: TextStyle(
                                            fontFamily: "DMSans",
                                            fontWeight: FontWeight.w400,
                                            fontSize: 14.0,
                                            color: Colors.black,
                                          ),
                                        ),
                                      ],
                                    ),
                                    const SizedBox(
                                      height: 16.0,
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 16.0),
                                      child: Container(
                                        height: 1.0,
                                        width: double.infinity,
                                        color: const Color(0xFFE2E2E2),
                                      ),
                                    ),
                                    const SizedBox(
                                      height: 16.0,
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 16.0),
                                      child: Row(
                                        children: [
                                          Expanded(
                                            child: Column(
                                              crossAxisAlignment:
                                                  CrossAxisAlignment.start,
                                              children: [
                                                const Text(
                                                  "Tier Info",
                                                  style: TextStyle(
                                                    fontFamily: "DMSans",
                                                    fontWeight: FontWeight.w500,
                                                    fontSize: 12.0,
                                                    color: Color(0xFF595D62),
                                                  ),
                                                ),
                                                const SizedBox(
                                                  height: 4.0,
                                                ),
                                                Row(
                                                  children: [
                                                    Image.asset(
                                                      "assets/pioneer.png",
                                                      height: 24.0,
                                                    ),
                                                    const SizedBox(
                                                      width: 8.0,
                                                    ),
                                                    const Text(
                                                      "Pioneer",
                                                      style: TextStyle(
                                                        fontFamily: "DMSans",
                                                        fontWeight:
                                                            FontWeight.w600,
                                                        fontSize: 14.0,
                                                        color: Colors.black,
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                              ],
                                            ),
                                          ),
                                          Expanded(
                                            child: Column(
                                              crossAxisAlignment:
                                                  CrossAxisAlignment.start,
                                              children: [
                                                const Text(
                                                  "Sparks",
                                                  style: TextStyle(
                                                    fontFamily: "DMSans",
                                                    fontWeight: FontWeight.w500,
                                                    fontSize: 12.0,
                                                    color: Color(0xFF595D62),
                                                  ),
                                                ),
                                                const SizedBox(
                                                  height: 4.0,
                                                ),
                                                Row(
                                                  children: [
                                                    Image.asset(
                                                      "assets/bolt.png",
                                                      height: 24.0,
                                                    ),
                                                    const SizedBox(
                                                      width: 8.0,
                                                    ),
                                                    const Text(
                                                      "2458 Sparks",
                                                      style: TextStyle(
                                                        fontFamily: "DMSans",
                                                        fontWeight:
                                                            FontWeight.w600,
                                                        fontSize: 14.0,
                                                        color: Colors.black,
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                              ],
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(left: 32.0),
                            child: Container(
                              height: 64.0,
                              width: 64.0,
                              decoration: BoxDecoration(
                                color: Colors.white,
                                borderRadius: const BorderRadius.all(
                                    Radius.circular(64.0)),
                                border:
                                    Border.all(color: Colors.white, width: 4.0),
                              ),
                              child: Image.asset('assets/avatar.png'),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 24.0,
                      ),
                      const Padding(
                        padding: EdgeInsets.symmetric(horizontal: 20.0),
                        child: Row(
                          children: [
                            Text(
                              "Your journey to the Next Tier",
                              style: TextStyle(
                                fontFamily: "DMSans",
                                fontWeight: FontWeight.w500,
                                fontSize: 12.0,
                                color: Color(0xFF595D62),
                              ),
                            ),
                            Spacer(),
                            Text(
                              "350/500 Points",
                              style: TextStyle(
                                fontFamily: "DMSans",
                                fontWeight: FontWeight.w500,
                                fontSize: 12.0,
                                color: Colors.black,
                              ),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(
                        height: 8.0,
                      ),
                      Stack(
                        children: [
                          Padding(
                            padding:
                                const EdgeInsets.symmetric(horizontal: 20.0),
                            child: Container(
                              height: 6.0,
                              decoration: BoxDecoration(
                                color: const Color(0xFFE9E8F6),
                                borderRadius: BorderRadius.circular(64.0),
                              ),
                            ),
                          ),
                          Row(
                            children: [
                              Expanded(
                                flex: 7,
                                child: Padding(
                                  padding: const EdgeInsets.symmetric(
                                      horizontal: 20.0),
                                  child: Container(
                                    height: 6.0,
                                    decoration: BoxDecoration(
                                      color: const Color(0xFF4E46B4),
                                      borderRadius: BorderRadius.circular(64.0),
                                    ),
                                  ),
                                ),
                              ),
                              Expanded(
                                flex: 3,
                                child: Container(),
                              ),
                            ],
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 16.0,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20.0),
                        child: Row(
                          children: [
                            const Text(
                              "Advance towards",
                              style: TextStyle(
                                fontFamily: "DMSans",
                                fontWeight: FontWeight.w500,
                                fontSize: 14.0,
                                color: Color(0xFF595D62),
                              ),
                            ),
                            const SizedBox(
                              width: 8.0,
                            ),
                            Image.asset(
                              "assets/visionary.png",
                              height: 24.0,
                            ),
                            const SizedBox(
                              width: 8.0,
                            ),
                            const Text(
                              "Visionary",
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
                      const SizedBox(
                        height: 24.0,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 16.0),
                        child: Container(
                          height: 1.0,
                          width: double.infinity,
                          color: const Color(0xFFE2E2E2),
                        ),
                      ),
                      const SizedBox(
                        height: 24.0,
                      ),
                      const Padding(
                        padding: EdgeInsets.symmetric(horizontal: 20.0),
                        child: Text(
                          "16 Badges Earned",
                          style: TextStyle(
                            fontFamily: "DMSans",
                            fontWeight: FontWeight.w500,
                            fontSize: 14.0,
                            color: Colors.black,
                          ),
                        ),
                      ),
                      const SizedBox(
                        height: 12.0,
                      ),
                      SizedBox(
                        height: 48.0,
                        child: ListView(
                          scrollDirection: Axis.horizontal,
                          padding: EdgeInsets.zero,
                          children: [
                            const SizedBox(
                              width: 16.0,
                            ),
                            Container(
                              width: 48.0,
                              height: 48.0,
                              color: const Color(0xFFF5F5F5),
                            ),
                            const SizedBox(
                              width: 32.0,
                            ),
                            Container(
                              width: 48.0,
                              height: 48.0,
                              color: const Color(0xFFF5F5F5),
                            ),
                            const SizedBox(
                              width: 32.0,
                            ),
                            Container(
                              width: 48.0,
                              height: 48.0,
                              color: const Color(0xFFF5F5F5),
                            ),
                            const SizedBox(
                              width: 32.0,
                            ),
                            Container(
                              width: 48.0,
                              height: 48.0,
                              color: const Color(0xFFF5F5F5),
                            ),
                            const SizedBox(
                              width: 32.0,
                            ),
                            Container(
                              width: 48.0,
                              height: 48.0,
                              color: const Color(0xFFF5F5F5),
                            ),
                            const SizedBox(
                              width: 32.0,
                            ),
                            Container(
                              width: 48.0,
                              height: 48.0,
                              color: const Color(0xFFF5F5F5),
                            ),
                            const SizedBox(
                              width: 32.0,
                            ),
                            Container(
                              width: 48.0,
                              height: 48.0,
                              color: const Color(0xFFF5F5F5),
                            ),
                            const SizedBox(
                              width: 32.0,
                            ),
                            Container(
                              width: 48.0,
                              height: 48.0,
                              color: const Color(0xFFF5F5F5),
                            ),
                            const SizedBox(
                              width: 32.0,
                            ),
                            Container(
                              width: 48.0,
                              height: 48.0,
                              color: const Color(0xFFF5F5F5),
                            ),
                            const SizedBox(
                              width: 16.0,
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(
                        height: 24.0,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 16.0),
                        child: Row(
                          children: [
                            const Text(
                              "Achievements",
                              style: TextStyle(
                                fontFamily: "DMSans",
                                fontWeight: FontWeight.w500,
                                fontSize: 14.0,
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
                                    color: Color(0xFF4E46B4),
                                  )),
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(4.0),
                              ),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(
                        height: 8.0,
                      ),
                      SizedBox(
                        height: 172.0,
                        child: ListView(
                          scrollDirection: Axis.horizontal,
                          padding: EdgeInsets.zero,
                          children: [
                            const SizedBox(
                              width: 16.0,
                            ),
                            ClipRRect(
                              borderRadius: BorderRadius.circular(12.0),
                              child: Container(
                                width: 194.0,
                                height: 172.0,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(12.0),
                                  border: Border.all(
                                      color: const Color(0xFFE2E2E2)),
                                ),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    const SizedBox(
                                      height: 16.0,
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 16.0),
                                      child: Container(
                                        width: 48.0,
                                        height: 48.0,
                                        color: const Color(0xFFF5F5F5),
                                      ),
                                    ),
                                    const SizedBox(
                                      height: 12.0,
                                    ),
                                    const Padding(
                                      padding: EdgeInsets.symmetric(
                                          horizontal: 16.0),
                                      child: Text(
                                        "Thumbs-Up Trooper",
                                        style: TextStyle(
                                          fontFamily: "DMSans",
                                          fontWeight: FontWeight.w600,
                                          fontSize: 14.0,
                                          color: Colors.black,
                                        ),
                                      ),
                                    ),
                                    const Padding(
                                      padding: EdgeInsets.symmetric(
                                          horizontal: 16.0),
                                      child: Text(
                                        "Appreciate posts every day for 5 days.",
                                        style: TextStyle(
                                          fontFamily: "DMSans",
                                          fontWeight: FontWeight.w500,
                                          fontSize: 12.0,
                                          color: Color(0xFF595D62),
                                        ),
                                      ),
                                    ),
                                    const SizedBox(
                                      height: 8.0,
                                    ),
                                    const Row(
                                      children: [
                                        Spacer(),
                                        Text(
                                          "3 days left",
                                          style: TextStyle(
                                            fontFamily: "DMSans",
                                            fontWeight: FontWeight.w500,
                                            fontSize: 12.0,
                                            color: Color(0xFF4E46B4),
                                          ),
                                        ),
                                        SizedBox(
                                          width: 16.0,
                                        ),
                                      ],
                                    ),
                                    const Spacer(),
                                    Stack(
                                      children: [
                                        Container(
                                          height: 4.0,
                                          width: double.infinity,
                                          color: const Color(0xFFE5EFE6),
                                        ),
                                        Row(
                                          children: [
                                            Expanded(
                                              flex: 2,
                                              child: Container(
                                                height: 4.0,
                                                width: double.infinity,
                                                color: const Color(0xFF2E7D32),
                                              ),
                                            ),
                                            Expanded(
                                              flex: 3,
                                              child: Container(),
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            const SizedBox(
                              width: 12.0,
                            ),
                            ClipRRect(
                              borderRadius: BorderRadius.circular(12.0),
                              child: Container(
                                width: 194.0,
                                height: 172.0,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(12.0),
                                  border: Border.all(
                                      color: const Color(0xFFE2E2E2)),
                                ),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    const SizedBox(
                                      height: 16.0,
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 16.0),
                                      child: Container(
                                        width: 48.0,
                                        height: 48.0,
                                        color: const Color(0xFFF5F5F5),
                                      ),
                                    ),
                                    const SizedBox(
                                      height: 12.0,
                                    ),
                                    const Padding(
                                      padding: EdgeInsets.symmetric(
                                          horizontal: 16.0),
                                      child: Text(
                                        "Thumbs-Up Trooper",
                                        style: TextStyle(
                                          fontFamily: "DMSans",
                                          fontWeight: FontWeight.w600,
                                          fontSize: 14.0,
                                          color: Colors.black,
                                        ),
                                      ),
                                    ),
                                    const Padding(
                                      padding: EdgeInsets.symmetric(
                                          horizontal: 16.0),
                                      child: Text(
                                        "Appreciate posts every day for 5 days.",
                                        style: TextStyle(
                                          fontFamily: "DMSans",
                                          fontWeight: FontWeight.w500,
                                          fontSize: 12.0,
                                          color: Color(0xFF595D62),
                                        ),
                                      ),
                                    ),
                                    const SizedBox(
                                      height: 8.0,
                                    ),
                                    const Row(
                                      children: [
                                        Spacer(),
                                        Text(
                                          "Completed",
                                          style: TextStyle(
                                            fontFamily: "DMSans",
                                            fontWeight: FontWeight.w500,
                                            fontSize: 12.0,
                                            color: Color(0xFF4E46B4),
                                          ),
                                        ),
                                        SizedBox(
                                          width: 16.0,
                                        ),
                                      ],
                                    ),
                                    const Spacer(),
                                    Stack(
                                      children: [
                                        Container(
                                          height: 4.0,
                                          width: double.infinity,
                                          color: const Color(0xFFE5EFE6),
                                        ),
                                        Row(
                                          children: [
                                            Expanded(
                                              flex: 5,
                                              child: Container(
                                                height: 4.0,
                                                width: double.infinity,
                                                color: const Color(0xFF2E7D32),
                                              ),
                                            ),
                                            Expanded(
                                              flex: 0,
                                              child: Container(),
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            const SizedBox(
                              width: 12.0,
                            ),
                            ClipRRect(
                              borderRadius: BorderRadius.circular(12.0),
                              child: Container(
                                width: 194.0,
                                height: 172.0,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(12.0),
                                  border: Border.all(
                                      color: const Color(0xFFE2E2E2)),
                                ),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    const SizedBox(
                                      height: 16.0,
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 16.0),
                                      child: Container(
                                        width: 48.0,
                                        height: 48.0,
                                        color: const Color(0xFFF5F5F5),
                                      ),
                                    ),
                                    const SizedBox(
                                      height: 12.0,
                                    ),
                                    const Padding(
                                      padding: EdgeInsets.symmetric(
                                          horizontal: 16.0),
                                      child: Text(
                                        "Thumbs-Up Trooper",
                                        style: TextStyle(
                                          fontFamily: "DMSans",
                                          fontWeight: FontWeight.w600,
                                          fontSize: 14.0,
                                          color: Colors.black,
                                        ),
                                      ),
                                    ),
                                    const Padding(
                                      padding: EdgeInsets.symmetric(
                                          horizontal: 16.0),
                                      child: Text(
                                        "Appreciate posts every day for 5 days.",
                                        style: TextStyle(
                                          fontFamily: "DMSans",
                                          fontWeight: FontWeight.w500,
                                          fontSize: 12.0,
                                          color: Color(0xFF595D62),
                                        ),
                                      ),
                                    ),
                                    const SizedBox(
                                      height: 8.0,
                                    ),
                                    const Row(
                                      children: [
                                        Spacer(),
                                        Text(
                                          "Completed",
                                          style: TextStyle(
                                            fontFamily: "DMSans",
                                            fontWeight: FontWeight.w500,
                                            fontSize: 12.0,
                                            color: Color(0xFF4E46B4),
                                          ),
                                        ),
                                        SizedBox(
                                          width: 16.0,
                                        ),
                                      ],
                                    ),
                                    const Spacer(),
                                    Stack(
                                      children: [
                                        Container(
                                          height: 4.0,
                                          width: double.infinity,
                                          color: const Color(0xFFE5EFE6),
                                        ),
                                        Row(
                                          children: [
                                            Expanded(
                                              flex: 5,
                                              child: Container(
                                                height: 4.0,
                                                width: double.infinity,
                                                color: const Color(0xFF2E7D32),
                                              ),
                                            ),
                                            Expanded(
                                              flex: 0,
                                              child: Container(),
                                            ),
                                          ],
                                        ),
                                      ],
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
                      const SizedBox(
                        height: 24.0,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 16.0),
                        child: Container(
                          height: 1.0,
                          width: double.infinity,
                          color: const Color(0xFFE2E2E2),
                        ),
                      ),
                      const SizedBox(
                        height: 24.0,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 16.0),
                        child: Row(
                          children: [
                            SvgPicture.asset(
                              "assets/chat_icon.svg",
                              width: 16.0,
                              color: const Color(0xFF595D62),
                            ),
                            const SizedBox(
                              width: 4.0,
                            ),
                            const Text(
                              "Your Go-To Expert Agents",
                              style: TextStyle(
                                fontFamily: "DMSans",
                                fontWeight: FontWeight.w500,
                                fontSize: 14.0,
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
                                    color: Color(0xFF4E46B4),
                                  )),
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(4.0),
                              ),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(
                        height: 16.0,
                      ),
                      SizedBox(
                        height: 248.0,
                        child: ListView(
                          scrollDirection: Axis.horizontal,
                          padding: EdgeInsets.zero,
                          children: [
                            const SizedBox(
                              width: 12.0,
                            ),
                            ClipRRect(
                              borderRadius: BorderRadius.circular(12.0),
                              child: Container(
                                width: 340.0,
                                height: 248.0,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(12.0),
                                  border: Border.all(
                                      color: const Color(0xFFE2E2E2)),
                                ),
                                child: Column(
                                  children: [
                                    Container(
                                      height: 52.0,
                                      width: double.infinity,
                                      decoration: const BoxDecoration(
                                        image: DecorationImage(
                                          image:
                                              AssetImage("assets/blue_bg.png"),
                                          fit: BoxFit.cover,
                                        ),
                                      ),
                                      child: Row(
                                        children: [
                                          const SizedBox(
                                            width: 12.0,
                                          ),
                                          const MoonAvatar(
                                            backgroundColor: Colors.white,
                                            height: 32.0,
                                            width: 32.0,
                                            borderRadius: BorderRadius.all(
                                              Radius.circular(32.0),
                                            ),
                                            content: Text(
                                              "CI",
                                              style: TextStyle(
                                                fontFamily: "DMSans",
                                                fontWeight: FontWeight.w600,
                                                fontSize: 12.0,
                                                color: Colors.black,
                                              ),
                                            ),
                                          ),
                                          const SizedBox(
                                            width: 12.0,
                                          ),
                                          const Text(
                                            "ProdWizard",
                                            style: TextStyle(
                                              fontFamily: "DMSans",
                                              fontWeight: FontWeight.w600,
                                              fontSize: 14.0,
                                              color: Colors.white,
                                            ),
                                          ),
                                          const Spacer(),
                                          SvgPicture.asset(
                                            "assets/full_screen_icon.svg",
                                            width: 24.0,
                                            height: 24.0,
                                            color: Colors.white,
                                          ),
                                          const SizedBox(
                                            width: 12.0,
                                          ),
                                        ],
                                      ),
                                    ),
                                    const SizedBox(
                                      height: 6.0,
                                    ),
                                    Row(
                                      children: [
                                        const Spacer(),
                                        Container(
                                          decoration: const BoxDecoration(
                                            borderRadius: BorderRadius.only(
                                              topLeft: Radius.circular(12.0),
                                              bottomLeft: Radius.circular(12.0),
                                              topRight: Radius.circular(12.0),
                                              bottomRight: Radius.circular(2.0),
                                            ),
                                            color: Color(0xFF3448F0),
                                          ),
                                          child: const Padding(
                                            padding: EdgeInsets.all(8.0),
                                            child: Text(
                                              "Hey",
                                              style: TextStyle(
                                                fontFamily: "DMSans",
                                                fontWeight: FontWeight.w500,
                                                fontSize: 12.0,
                                                color: Colors.white,
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
                                      height: 4.0,
                                    ),
                                    Row(
                                      children: [
                                        const SizedBox(
                                          width: 12.0,
                                        ),
                                        Container(
                                          decoration: const BoxDecoration(
                                            borderRadius: BorderRadius.only(
                                              topLeft: Radius.circular(12.0),
                                              bottomRight:
                                                  Radius.circular(12.0),
                                              topRight: Radius.circular(12.0),
                                              bottomLeft: Radius.circular(2.0),
                                            ),
                                            color: Color(0xFFE6E9FD),
                                          ),
                                          child: const Padding(
                                            padding: EdgeInsets.all(8.0),
                                            child: Text(
                                              "Hey Vidya!",
                                              style: TextStyle(
                                                fontFamily: "DMSans",
                                                fontWeight: FontWeight.w500,
                                                fontSize: 12.0,
                                                color: Colors.black,
                                              ),
                                            ),
                                          ),
                                        ),
                                        const Spacer(),
                                      ],
                                    ),
                                    const SizedBox(
                                      height: 2.0,
                                    ),
                                    Row(
                                      children: [
                                        const SizedBox(
                                          width: 12.0,
                                        ),
                                        Container(
                                          decoration: const BoxDecoration(
                                            borderRadius: BorderRadius.only(
                                              topLeft: Radius.circular(2.0),
                                              bottomRight:
                                                  Radius.circular(12.0),
                                              topRight: Radius.circular(12.0),
                                              bottomLeft: Radius.circular(12.0),
                                            ),
                                            color: Color(0xFFE6E9FD),
                                          ),
                                          child: const Padding(
                                            padding: EdgeInsets.all(8.0),
                                            child: Text(
                                              "How may I assist you?",
                                              style: TextStyle(
                                                fontFamily: "DMSans",
                                                fontWeight: FontWeight.w500,
                                                fontSize: 12.0,
                                                color: Colors.black,
                                              ),
                                            ),
                                          ),
                                        ),
                                        const Spacer(),
                                      ],
                                    ),
                                    const SizedBox(
                                      height: 8.0,
                                    ),
                                    const Row(
                                      children: [
                                        SizedBox(
                                          width: 16.0,
                                        ),
                                        Text(
                                          "Today, 11:58",
                                          style: TextStyle(
                                            fontFamily: "DMSans",
                                            fontWeight: FontWeight.w500,
                                            fontSize: 10.0,
                                            color: Color(0xFF595D62),
                                          ),
                                        ),
                                        Spacer(),
                                      ],
                                    ),
                                    const SizedBox(
                                      height: 8.0,
                                    ),
                                    Container(
                                      height: 1.0,
                                      width: double.infinity,
                                      color: const Color(0xFFE2E2E2),
                                    ),
                                    const SizedBox(
                                      height: 16.0,
                                    ),
                                    Row(
                                      children: [
                                        const SizedBox(
                                          width: 16.0,
                                        ),
                                        const Text(
                                          "Reply to ProdWizard",
                                          style: TextStyle(
                                            fontFamily: "DMSans",
                                            fontWeight: FontWeight.w500,
                                            fontSize: 12.0,
                                            color: Color(0xFF595D62),
                                          ),
                                        ),
                                        const Spacer(),
                                        MoonTextButton(
                                          onTap: () {},
                                          height: 24.0,
                                          leading: SvgPicture.asset(
                                            'assets/share_icon.svg',
                                            color: const Color(0xFF3448F0),
                                            width: 16.0,
                                          ),
                                          decoration: BoxDecoration(
                                            borderRadius:
                                                BorderRadius.circular(4.0),
                                            color: const Color(0xFFE6E9FD),
                                          ),
                                        ),
                                        const SizedBox(
                                          width: 16.0,
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            const SizedBox(
                              width: 12.0,
                            ),
                            ClipRRect(
                              borderRadius: BorderRadius.circular(12.0),
                              child: Container(
                                width: 340.0,
                                height: 248.0,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(12.0),
                                  border: Border.all(
                                      color: const Color(0xFFE2E2E2)),
                                ),
                                child: Column(
                                  children: [
                                    Container(
                                      height: 52.0,
                                      width: double.infinity,
                                      decoration: const BoxDecoration(
                                        image: DecorationImage(
                                          image: AssetImage(
                                              "assets/yellow_bg.png"),
                                          fit: BoxFit.cover,
                                        ),
                                      ),
                                      child: Row(
                                        children: [
                                          const SizedBox(
                                            width: 12.0,
                                          ),
                                          const MoonAvatar(
                                            backgroundColor: Colors.white,
                                            height: 32.0,
                                            width: 32.0,
                                            borderRadius: BorderRadius.all(
                                              Radius.circular(32.0),
                                            ),
                                            content: Text(
                                              "CI",
                                              style: TextStyle(
                                                fontFamily: "DMSans",
                                                fontWeight: FontWeight.w600,
                                                fontSize: 12.0,
                                                color: Colors.black,
                                              ),
                                            ),
                                          ),
                                          const SizedBox(
                                            width: 12.0,
                                          ),
                                          const Text(
                                            "ProdWizard",
                                            style: TextStyle(
                                              fontFamily: "DMSans",
                                              fontWeight: FontWeight.w600,
                                              fontSize: 14.0,
                                              color: Colors.white,
                                            ),
                                          ),
                                          const Spacer(),
                                          SvgPicture.asset(
                                            "assets/full_screen_icon.svg",
                                            width: 24.0,
                                            height: 24.0,
                                            color: Colors.white,
                                          ),
                                          const SizedBox(
                                            width: 12.0,
                                          ),
                                        ],
                                      ),
                                    ),
                                    const SizedBox(
                                      height: 6.0,
                                    ),
                                    Row(
                                      children: [
                                        const Spacer(),
                                        Container(
                                          decoration: const BoxDecoration(
                                            borderRadius: BorderRadius.only(
                                              topLeft: Radius.circular(12.0),
                                              bottomLeft: Radius.circular(12.0),
                                              topRight: Radius.circular(12.0),
                                              bottomRight: Radius.circular(2.0),
                                            ),
                                            color: Color(0xFF3448F0),
                                          ),
                                          child: const Padding(
                                            padding: EdgeInsets.all(8.0),
                                            child: Text(
                                              "Hey",
                                              style: TextStyle(
                                                fontFamily: "DMSans",
                                                fontWeight: FontWeight.w500,
                                                fontSize: 12.0,
                                                color: Colors.white,
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
                                      height: 4.0,
                                    ),
                                    Row(
                                      children: [
                                        const SizedBox(
                                          width: 12.0,
                                        ),
                                        Container(
                                          decoration: const BoxDecoration(
                                            borderRadius: BorderRadius.only(
                                              topLeft: Radius.circular(12.0),
                                              bottomRight:
                                                  Radius.circular(12.0),
                                              topRight: Radius.circular(12.0),
                                              bottomLeft: Radius.circular(2.0),
                                            ),
                                            color: Color(0xFFE6E9FD),
                                          ),
                                          child: const Padding(
                                            padding: EdgeInsets.all(8.0),
                                            child: Text(
                                              "Hey Vidya!",
                                              style: TextStyle(
                                                fontFamily: "DMSans",
                                                fontWeight: FontWeight.w500,
                                                fontSize: 12.0,
                                                color: Colors.black,
                                              ),
                                            ),
                                          ),
                                        ),
                                        const Spacer(),
                                      ],
                                    ),
                                    const SizedBox(
                                      height: 2.0,
                                    ),
                                    Row(
                                      children: [
                                        const SizedBox(
                                          width: 12.0,
                                        ),
                                        Container(
                                          decoration: const BoxDecoration(
                                            borderRadius: BorderRadius.only(
                                              topLeft: Radius.circular(2.0),
                                              bottomRight:
                                                  Radius.circular(12.0),
                                              topRight: Radius.circular(12.0),
                                              bottomLeft: Radius.circular(12.0),
                                            ),
                                            color: Color(0xFFE6E9FD),
                                          ),
                                          child: const Padding(
                                            padding: EdgeInsets.all(8.0),
                                            child: Text(
                                              "How may I assist you?",
                                              style: TextStyle(
                                                fontFamily: "DMSans",
                                                fontWeight: FontWeight.w500,
                                                fontSize: 12.0,
                                                color: Colors.black,
                                              ),
                                            ),
                                          ),
                                        ),
                                        const Spacer(),
                                      ],
                                    ),
                                    const SizedBox(
                                      height: 8.0,
                                    ),
                                    const Row(
                                      children: [
                                        SizedBox(
                                          width: 16.0,
                                        ),
                                        Text(
                                          "Today, 11:58",
                                          style: TextStyle(
                                            fontFamily: "DMSans",
                                            fontWeight: FontWeight.w500,
                                            fontSize: 10.0,
                                            color: Color(0xFF595D62),
                                          ),
                                        ),
                                        Spacer(),
                                      ],
                                    ),
                                    const SizedBox(
                                      height: 8.0,
                                    ),
                                    Container(
                                      height: 1.0,
                                      width: double.infinity,
                                      color: const Color(0xFFE2E2E2),
                                    ),
                                    const SizedBox(
                                      height: 16.0,
                                    ),
                                    Row(
                                      children: [
                                        const SizedBox(
                                          width: 16.0,
                                        ),
                                        const Text(
                                          "Reply to ProdWizard",
                                          style: TextStyle(
                                            fontFamily: "DMSans",
                                            fontWeight: FontWeight.w500,
                                            fontSize: 12.0,
                                            color: Color(0xFF595D62),
                                          ),
                                        ),
                                        const Spacer(),
                                        MoonTextButton(
                                          onTap: () {},
                                          height: 24.0,
                                          leading: SvgPicture.asset(
                                            'assets/share_icon.svg',
                                            color: const Color(0xFF3448F0),
                                            width: 16.0,
                                          ),
                                          decoration: BoxDecoration(
                                            borderRadius:
                                                BorderRadius.circular(4.0),
                                            color: const Color(0xFFE6E9FD),
                                          ),
                                        ),
                                        const SizedBox(
                                          width: 16.0,
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(
                        height: 24.0,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 16.0),
                        child: Container(
                          height: 1.0,
                          width: double.infinity,
                          color: const Color(0xFFE2E2E2),
                        ),
                      ),
                      const SizedBox(
                        height: 24.0,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20.0),
                        child: Row(
                          children: [
                            const Text(
                              "Share your ideas",
                              style: TextStyle(
                                fontFamily: "DMSans",
                                fontWeight: FontWeight.w500,
                                fontSize: 14.0,
                                color: Color(0xFF595D62),
                              ),
                            ),
                            const Spacer(),
                            MoonTextButton(
                              onTap: () {},
                              height: 24.0,
                              label: const Text('Compose',
                                  style: TextStyle(
                                    fontFamily: "DMSans",
                                    fontWeight: FontWeight.w600,
                                    fontSize: 12.0,
                                    color: Color(0xFF4E46B4),
                                  )),
                              leading: SvgPicture.asset(
                                'assets/compose_icon.svg',
                                color: const Color(0xFF4E46B4),
                                width: 16.0,
                              ),
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(4.0),
                                color: const Color(0xFFE9E8F6),
                              ),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(
                        height: 12.0,
                      ),
                      SizedBox(
                        height: 176.0,
                        child: ListView(
                          scrollDirection: Axis.horizontal,
                          padding: EdgeInsets.zero,
                          children: [
                            const SizedBox(
                              width: 16.0,
                            ),
                            Container(
                              width: 152.0,
                              height: 176.0,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(12.0),
                                border:
                                    Border.all(color: const Color(0xFFE2E2E2)),
                              ),
                              child: const Padding(
                                padding: EdgeInsets.symmetric(horizontal: 16.0),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(
                                      height: 12.0,
                                    ),
                                    Text(
                                      "Exploring ML",
                                      style: TextStyle(
                                        fontFamily: "DMSans",
                                        fontWeight: FontWeight.w600,
                                        fontSize: 14.0,
                                        color: Colors.black,
                                      ),
                                    ),
                                    SizedBox(
                                      height: 4.0,
                                    ),
                                    Text(
                                      "Reflecting on this journey, I've grown not just as a developer but also as a problem-solver and creative thinker. Sta ...",
                                      maxLines: 6,
                                      style: TextStyle(
                                        fontFamily: "DMSans",
                                        fontWeight: FontWeight.w500,
                                        fontSize: 12.0,
                                        color: Color(0xFF595D62),
                                      ),
                                    ),
                                    SizedBox(
                                      height: 12.0,
                                    ),
                                    Text(
                                      "Updated 2 days ago",
                                      style: TextStyle(
                                        fontFamily: "DMSans",
                                        fontWeight: FontWeight.w500,
                                        fontSize: 10.0,
                                        color: Color(0xFF595D62),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            const SizedBox(
                              width: 12.0,
                            ),
                            Container(
                              width: 152.0,
                              height: 176.0,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(12.0),
                                border:
                                    Border.all(color: const Color(0xFFE2E2E2)),
                              ),
                              child: const Padding(
                                padding: EdgeInsets.symmetric(horizontal: 16.0),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(
                                      height: 12.0,
                                    ),
                                    Text(
                                      "Exploring ML",
                                      style: TextStyle(
                                        fontFamily: "DMSans",
                                        fontWeight: FontWeight.w600,
                                        fontSize: 14.0,
                                        color: Colors.black,
                                      ),
                                    ),
                                    SizedBox(
                                      height: 4.0,
                                    ),
                                    Text(
                                      "Reflecting on this journey, I've grown not just as a developer but also as a problem-solver and creative thinker. Sta ...",
                                      maxLines: 6,
                                      style: TextStyle(
                                        fontFamily: "DMSans",
                                        fontWeight: FontWeight.w500,
                                        fontSize: 12.0,
                                        color: Color(0xFF595D62),
                                      ),
                                    ),
                                    SizedBox(
                                      height: 12.0,
                                    ),
                                    Text(
                                      "Updated 2 days ago",
                                      style: TextStyle(
                                        fontFamily: "DMSans",
                                        fontWeight: FontWeight.w500,
                                        fontSize: 10.0,
                                        color: Color(0xFF595D62),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            const SizedBox(
                              width: 12.0,
                            ),
                            Container(
                              width: 152.0,
                              height: 176.0,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(12.0),
                                border:
                                    Border.all(color: const Color(0xFFE2E2E2)),
                              ),
                              child: const Padding(
                                padding: EdgeInsets.symmetric(horizontal: 16.0),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(
                                      height: 12.0,
                                    ),
                                    Text(
                                      "Exploring ML",
                                      style: TextStyle(
                                        fontFamily: "DMSans",
                                        fontWeight: FontWeight.w600,
                                        fontSize: 14.0,
                                        color: Colors.black,
                                      ),
                                    ),
                                    SizedBox(
                                      height: 4.0,
                                    ),
                                    Text(
                                      "Reflecting on this journey, I've grown not just as a developer but also as a problem-solver and creative thinker. Sta ...",
                                      maxLines: 6,
                                      style: TextStyle(
                                        fontFamily: "DMSans",
                                        fontWeight: FontWeight.w500,
                                        fontSize: 12.0,
                                        color: Color(0xFF595D62),
                                      ),
                                    ),
                                    SizedBox(
                                      height: 12.0,
                                    ),
                                    Text(
                                      "Updated 2 days ago",
                                      style: TextStyle(
                                        fontFamily: "DMSans",
                                        fontWeight: FontWeight.w500,
                                        fontSize: 10.0,
                                        color: Color(0xFF595D62),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            const SizedBox(
                              width: 12.0,
                            ),
                            Container(
                              width: 152.0,
                              height: 176.0,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(12.0),
                                border:
                                    Border.all(color: const Color(0xFFE2E2E2)),
                              ),
                              child: const Padding(
                                padding: EdgeInsets.symmetric(horizontal: 16.0),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(
                                      height: 12.0,
                                    ),
                                    Text(
                                      "Exploring ML",
                                      style: TextStyle(
                                        fontFamily: "DMSans",
                                        fontWeight: FontWeight.w600,
                                        fontSize: 14.0,
                                        color: Colors.black,
                                      ),
                                    ),
                                    SizedBox(
                                      height: 4.0,
                                    ),
                                    Text(
                                      "Reflecting on this journey, I've grown not just as a developer but also as a problem-solver and creative thinker. Sta ...",
                                      maxLines: 6,
                                      style: TextStyle(
                                        fontFamily: "DMSans",
                                        fontWeight: FontWeight.w500,
                                        fontSize: 12.0,
                                        color: Color(0xFF595D62),
                                      ),
                                    ),
                                    SizedBox(
                                      height: 12.0,
                                    ),
                                    Text(
                                      "Updated 2 days ago",
                                      style: TextStyle(
                                        fontFamily: "DMSans",
                                        fontWeight: FontWeight.w500,
                                        fontSize: 10.0,
                                        color: Color(0xFF595D62),
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
                      const SizedBox(
                        height: 24.0,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 16.0),
                        child: Container(
                          height: 1.0,
                          width: double.infinity,
                          color: const Color(0xFFE2E2E2),
                        ),
                      ),
                      const SizedBox(
                        height: 24.0,
                      ),
                      Padding(
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
                                padding:
                                    const EdgeInsets.symmetric(horizontal: 8.0),
                                child: Row(
                                  children: [
                                    Expanded(
                                      child: Container(
                                        height: 64.0,
                                        decoration: BoxDecoration(
                                          borderRadius:
                                              BorderRadius.circular(4.0),
                                          border: Border.all(
                                            color: const Color(0xFFE2E2E2),
                                          ),
                                        ),
                                        child: Row(children: [
                                          const SizedBox(
                                            width: 16.0,
                                          ),
                                          const Column(
                                            mainAxisAlignment:
                                                MainAxisAlignment.center,
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
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
                                        borderRadius:
                                            BorderRadius.circular(4.0),
                                        border: Border.all(
                                          color: const Color(0xFFE2E2E2),
                                        ),
                                      ),
                                      child: const Padding(
                                        padding: EdgeInsets.symmetric(
                                            horizontal: 16.0),
                                        child: Column(
                                          mainAxisAlignment:
                                              MainAxisAlignment.center,
                                          children: [
                                            Text(
                                              "2/12 Tasks",
                                              style: TextStyle(
                                                fontFamily: "DMSans",
                                                fontWeight: FontWeight.w600,
                                                fontSize: 14.0,
                                                color: Colors.black,
                                              ),
                                            ),
                                            Text(
                                              "Completed",
                                              style: TextStyle(
                                                fontFamily: "DMSans",
                                                fontWeight: FontWeight.w500,
                                                fontSize: 12.0,
                                                color: Color(0xFF595D62),
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
                                height: 24.0,
                              ),
                              Row(
                                children: [
                                  const SizedBox(
                                    width: 24.0,
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
                                ],
                              ),
                              const SizedBox(
                                height: 12.0,
                              ),
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
                                    width: 56.0,
                                  ),
                                  Container(
                                    width: 214.0,
                                    decoration: BoxDecoration(
                                      borderRadius: BorderRadius.circular(4.0),
                                      border: Border.all(
                                        color: const Color(0xFFE2E2E2),
                                      ),
                                    ),
                                    child: const Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        SizedBox(
                                          height: 4.0,
                                        ),
                                        Padding(
                                          padding: EdgeInsets.symmetric(
                                              horizontal: 8.0),
                                          child: Text(
                                            "Create and finalize the wireframe designs for all app screens",
                                            style: TextStyle(
                                              fontFamily: "DMSans",
                                              fontWeight: FontWeight.w500,
                                              fontSize: 12.0,
                                              color: Color(0xFF595D62),
                                            ),
                                          ),
                                        ),
                                        SizedBox(
                                          height: 12.0,
                                        ),
                                        Padding(
                                          padding: EdgeInsets.symmetric(
                                              horizontal: 8.0),
                                          child: Text(
                                            "Completed on 28 Nov, 2023",
                                            style: TextStyle(
                                              fontFamily: "DMSans",
                                              fontWeight: FontWeight.w500,
                                              fontSize: 12.0,
                                              color: Color(0xFF595D62),
                                            ),
                                          ),
                                        ),
                                        SizedBox(
                                          height: 4.0,
                                        ),
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                              const SizedBox(
                                height: 44.0,
                              ),
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
                                height: 16.0,
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
                                height: 32.0,
                              ),
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(
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
