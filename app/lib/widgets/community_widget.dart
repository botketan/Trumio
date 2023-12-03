import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class CommunityWidget extends StatelessWidget {
  const CommunityWidget({
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
    );
  }
}

