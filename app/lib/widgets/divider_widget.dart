import 'package:flutter/material.dart';

class DividerWidget extends StatelessWidget {
  const DividerWidget({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0),
      child: Container(
        height: 1.0,
        width: double.infinity,
        color: const Color(0xFFE2E2E2),
      ),
    );
  }
}
