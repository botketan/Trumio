import 'package:flutter/material.dart';

class NextTierWidget extends StatelessWidget {
  const NextTierWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
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
              padding: const EdgeInsets.symmetric(
                  horizontal: 20.0),
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
                        borderRadius:
                            BorderRadius.circular(64.0),
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
          padding:
              const EdgeInsets.symmetric(horizontal: 20.0),
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
      ],
    );
  }
}
