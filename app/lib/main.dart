import 'dart:ui';

import 'package:app/screens/communities_screen.dart';
import 'package:app/screens/explore_screen.dart';
import 'package:app/screens/truspace_screen.dart';
import 'package:app/screens/upskill_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_svg/svg.dart';

void main() {
  runApp(const MyHomePage());
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage>
    with SingleTickerProviderStateMixin {
  int _pageIndex = 0;

  late AnimationController animatedController;
  late Animation<double> fadeAnimation;
  late Animation<double> blurAnimation;
  final GlobalKey<ScaffoldState> _scaffoldkey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    animatedController = AnimationController(
        vsync: this, value: 1, duration: const Duration(milliseconds: 700));
    fadeAnimation = Tween<double>(begin: 1, end: 0.6).animate(
      CurvedAnimation(parent: animatedController, curve: Curves.ease),
    );
    blurAnimation = Tween<double>(begin: 0.0, end: 8.0).animate(
      CurvedAnimation(parent: animatedController, curve: Curves.easeIn),
    );
    animatedController.reverse();
    animatedController.duration = const Duration(milliseconds: 100);
  }

  @override
  void dispose() {
    animatedController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        key: _scaffoldkey,
        body: WillPopScope(
          onWillPop: () async {
            if (_pageIndex != 0) {
              animatedController.forward().then((value) {
                setState(() {
                  _pageIndex = 0;
                });
                animatedController.reverse();
              });
              return false;
            }
            SystemNavigator.pop();
            return false;
          },
          child: Row(
            children: [
              Expanded(
                child: Stack(
                  children: [
                    Column(
                      children: [
                        Expanded(
                          child: IndexedStack(
                            index: _pageIndex,
                            children: [
                              ExploreScreen(),
                              const TruspaceScreen(),
                              const CommunitiesScreen(),
                              const UpskillScreen(),
                            ].map((e) {
                              return FadeTransition(
                                opacity: fadeAnimation,
                                child: e,
                              );
                            }).toList(),
                          ),
                        ),
                      ],
                    ),
                    IgnorePointer(
                      child: AnimatedBuilder(
                        animation: fadeAnimation,
                        builder: (_, __) {
                          return BackdropFilter(
                            filter: ImageFilter.blur(
                                sigmaX: blurAnimation.value + 0.00001,
                                sigmaY: blurAnimation.value + 0.00001,
                                tileMode: TileMode.mirror),
                            child: Container(
                              width: double.maxFinite,
                              height: double.maxFinite,
                              color: Colors.transparent,
                            ),
                          );
                        },
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
        bottomNavigationBar: SafeArea(
          child: NavigationBar(
            shadowColor: Colors.black,
            elevation: 5,
            backgroundColor: Colors.white,
            surfaceTintColor: Colors.white,
            height: 96,
            destinations: [
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    padding: const EdgeInsets.all(0),
                    onPressed: () {
                      if (0 != _pageIndex) {
                        animatedController.forward().then((value) {
                          setState(() {
                            _pageIndex = 0;
                          });
                          animatedController.reverse();
                        });
                      }
                    },
                    icon: (_pageIndex == 0)
                        ? SvgPicture.asset("assets/nav/explore_a.svg")
                        : SvgPicture.asset("assets/nav/explore.svg"),
                    color: Colors.black,
                  ),
                  const Text(
                    "Explore",
                    style: TextStyle(
                      fontFamily: "DMSans",
                      fontSize: 12,
                      fontWeight: FontWeight.w500,
                      color: Colors.black,
                    ),
                  ),
                ],
              ),
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    padding: const EdgeInsets.all(0),
                    onPressed: () {
                      if (1 != _pageIndex) {
                        animatedController.forward().then((value) {
                          setState(() {
                            _pageIndex = 1;
                          });
                          animatedController.reverse();
                        });
                      }
                    },
                    icon: (_pageIndex == 1)
                        ? SvgPicture.asset("assets/nav/truspace_a.svg")
                        : SvgPicture.asset("assets/nav/truspace.svg"),
                    color: Colors.black,
                  ),
                  const Text(
                    "Truspace",
                    style: TextStyle(
                      fontFamily: "DMSans",
                      fontSize: 12,
                      fontWeight: FontWeight.w500,
                      color: Colors.black,
                    ),
                  ),
                ],
              ),
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    padding: const EdgeInsets.all(0),
                    onPressed: () {
                      if (2 != _pageIndex) {
                        animatedController.forward().then((value) {
                          setState(() {
                            _pageIndex = 2;
                          });
                          animatedController.reverse();
                        });
                      }
                    },
                    icon: (_pageIndex == 2)
                        ? SvgPicture.asset("assets/nav/communities_a.svg")
                        : SvgPicture.asset("assets/nav/communities.svg"),
                    color: Colors.black,
                  ),
                  const Text(
                    "Communities",
                    style: TextStyle(
                      fontFamily: "DMSans",
                      fontSize: 12,
                      fontWeight: FontWeight.w500,
                      color: Colors.black,
                    ),
                  ),
                ],
              ),
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    padding: const EdgeInsets.all(0),
                    onPressed: () {
                      if (3 != _pageIndex) {
                        animatedController.forward().then((value) {
                          setState(() {
                            _pageIndex = 3;
                          });
                          animatedController.reverse();
                        });
                      }
                    },
                    icon: (_pageIndex == 3)
                        ? SvgPicture.asset("assets/nav/upskill_a.svg")
                        : SvgPicture.asset("assets/nav/upskill.svg"),
                    color: Colors.black,
                  ),
                  const Text(
                    "Upskill",
                    style: TextStyle(
                      fontFamily: "DMSans",
                      fontSize: 12,
                      fontWeight: FontWeight.w500,
                      color: Colors.black,
                    ),
                  ),
                ],
              ),
            ],
            selectedIndex: _pageIndex,
            onDestinationSelected: (int index) {
              if (index != _pageIndex) {
                animatedController.forward().then((value) {
                  setState(() {
                    _pageIndex = index;
                  });
                  animatedController.reverse();
                });
              }
            },
          ),
        ),
      ),
    );
  }
}
