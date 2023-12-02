import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:moon_design/moon_design.dart';

class CIAgentWindowWidget extends StatelessWidget {
  const CIAgentWindowWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
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
                      "assets/blue_bg.png"),
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
                      topLeft:
                          Radius.circular(12.0),
                      bottomLeft:
                          Radius.circular(12.0),
                      topRight:
                          Radius.circular(12.0),
                      bottomRight:
                          Radius.circular(2.0),
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
                      topLeft:
                          Radius.circular(12.0),
                      bottomRight:
                          Radius.circular(12.0),
                      topRight:
                          Radius.circular(12.0),
                      bottomLeft:
                          Radius.circular(2.0),
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
                      topRight:
                          Radius.circular(12.0),
                      bottomLeft:
                          Radius.circular(12.0),
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
    );
  }
}
