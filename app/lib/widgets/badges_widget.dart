import 'package:flutter/material.dart';

class BadgesWidget extends StatelessWidget {
  const BadgesWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
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
      ],
    );
  }
}
