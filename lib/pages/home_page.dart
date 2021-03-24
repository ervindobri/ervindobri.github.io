import 'dart:math';
import 'dart:ui';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfol_io/constants/globals.dart';
import 'package:portfol_io/constants/theme_utils.dart';
import 'package:portfol_io/custom_widgets/fade_in_slide.dart';
import 'package:portfol_io/custom_widgets/social_media_button.dart';
import 'package:flutter_staggered_animations/flutter_staggered_animations.dart';
import 'package:quiver/iterables.dart';

// ignore: must_be_immutable
class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with TickerProviderStateMixin{
  late ScrollController _scrollController = ScrollController();

  late final AnimationController _topController = AnimationController(
    duration: const Duration(milliseconds: 600),
    vsync: this,
  )..forward();
  late final Animation<double> _titleAnimation = CurvedAnimation(
    parent: _topController,
    curve: Curves.easeIn,
  );

  late List<Animation<double>> _buttonAnimations;
  late List<AnimationController> _buttonAnimationControllers;

  int _animDelay = 150;

  var random = new Random();
  //TODO: animations
  // late List<AnimationController> _buttonAnimations;



  void initAnimations(){
    _buttonAnimationControllers = [
      AnimationController(
        duration: const Duration(milliseconds: 500),
        vsync: this,
      ),
      AnimationController(
        duration: const Duration(milliseconds: 500),
        vsync: this,
      ),
      AnimationController(
        duration: const Duration(milliseconds: 500),
        vsync: this,
      ),
      AnimationController(
        duration: const Duration(milliseconds: 500),
        vsync: this,
      )
    ];
    _buttonAnimations = [];
    for(var i in range(0, _buttonAnimationControllers.length)){
      _buttonAnimations.add(CurvedAnimation(
        parent: _buttonAnimationControllers[i.toInt()],
        curve: Curves.easeInOut,
      ));
    }
  }

  @override
  void initState() {
    // TODO: implement initState
    initAnimations();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final width = Get.width;
    final height = Get.height;
    return Scaffold(
      body: Stack(
        children: [
          NotificationListener<ScrollNotification>(
            onNotification: (notification) {
              if (notification.depth == 0) {
                if (notification is ScrollUpdateNotification) {
                  if ( notification.metrics.pixels < Get.height){
                      _topController.forward();
                      _playButtonAnims();
                  }
                  else{
                    _topController.reverse();
                    _reverseButtonAnims();

                  }
                } else {

                }
              }
              return true;
            },
            child: Scrollbar(
              isAlwaysShown: true,
              interactive: true,
              controller: _scrollController,
              child: SingleChildScrollView(
                controller: _scrollController,
                physics: PageScrollPhysics(),
                  child: Column(
                    children: [
                      topContents(),
                      Container(
                        height: height,
                        width: width,
                        color: Colors.white,
                      ),
                ],
              )),
            ),
          ),
          Positioned(
            child: ClipRRect(
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 30, sigmaY: 30),
                child: Container(
                  height: Get.height*.15,
                  color: ThemeUtils.darkGrey.withOpacity(.3),
                  child: topMenu(),
                ),
              ),
            ),
          ),
        ],
      )
    );
  }

  topContents() {
    return Container(
      height: Get.height,
      width: Get.width,
      decoration: BoxDecoration(
          gradient: ThemeUtils.greyGradient
      ),
      child: Stack(
        children: [
          Padding(
            padding: const EdgeInsets.all(50.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                  Padding(
                    padding: const EdgeInsets.only(top: 100.0),
                      child: FadeTransition(
                        opacity: Tween<double>(
                          begin: 0,
                          end: 1,
                        ).animate(_titleAnimation),
                        child: SlideTransition(
                          position: Tween<Offset>(
                            begin: Offset(0, 0.1),
                            end: Offset.zero,
                          ).animate(_titleAnimation),
                        child: Text(
                          Globals.homeTitle,
                          style: GoogleFonts.oswald(
                            color: ThemeUtils.white,
                            fontSize: Get.width/15,
                            shadows: [BoxShadow(
                              color: ThemeUtils.darkGrey,
                              blurRadius: 10,
                              spreadRadius: -2
                            )]
                          ),
                        ),
                      ),
                      ),
                  ),
                  FadeTransition(
                  opacity: Tween<double>(
                    begin: 0,
                    end: 1,
                  ).animate(_titleAnimation),
                  child: SlideTransition(
                    position: Tween<Offset>(
                      begin: Offset(0, 0.1),
                      end: Offset.zero,
                    ).animate(_titleAnimation),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(vertical: 50.0, horizontal: 200),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            width: Get.width*.15,
                            child: ElevatedButton(
                              style: ButtonStyle(
                                  backgroundColor: MaterialStateProperty.all(ThemeUtils.primaryColor),
                                  shadowColor: MaterialStateProperty.all(ThemeUtils.primaryColor),
                                  shape: MaterialStateProperty.all(RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(15))
                                  )
                              ),
                              onPressed: () { _scrollController.animateTo(Get.height, duration: Duration(milliseconds: 300), curve: Curves.easeInOut); },
                              child: Padding(
                                padding: const EdgeInsets.all(25.0),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                                  children: [
                                    Text(
                                      Globals.checkMeOut,
                                      style: GoogleFonts.oswald(
                                        color: ThemeUtils.white,
                                        fontSize: 30,
                                      ),
                                    ),
                                    FaIcon(
                                      FontAwesomeIcons.arrowDown,
                                      color: ThemeUtils.white,
                                    )
                                  ],
                                ),
                              ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: AnimationLimiter(
                              child: Row(
                                children: List.generate(Globals.socialMediaBubbles.values.length, (index)
                                => AnimationConfiguration.staggeredList(
                                  position: index,
                                  child: SlideAnimation(
                                    verticalOffset: 50,
                                    delay: Duration(milliseconds: index*100),
                                    child: FadeInAnimation(
                                      child: Padding(
                                        padding: const EdgeInsets.all(15.0),
                                        child: SocialMediaBubble(
                                            icon: Globals.socialMediaBubbles.values.toList()[index].first,
                                            href: Globals.socialMediaBubbles.values.toList()[index].last
                                        ),
                                      ),
                                    ),
                                  ),
                                )
                                ),
                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                  )
                ),
              ],
            ),
          ),
          Positioned(
            bottom: 100,
            right: 100,
            child: Container(
              height: Get.height/2.2,
              width: Get.width*.4,
              // color: Colors.black,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  greyButton(1, "Logo design", (){ print("hi"); }),
                  Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      greyButton(0, "UX/UI design", () { }),
                      Container(
                        height: 120,
                        width: 120,
                        decoration: BoxDecoration(
                            color: ThemeUtils.primaryColor,
                            shape: BoxShape.circle
                        ),
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Container(
                            height: 100,
                            width: 100,
                            decoration: BoxDecoration(
                              image: DecorationImage(
                                  image: AssetImage("assets/pic.jpeg"),
                                fit: BoxFit.cover
                              ),
                              shape: BoxShape.circle
                            )
                          ),
                        ),
                      ),
                      greyButton(3, "Desktop Apps", () { }),
                    ],
                  ),
                  greyButton(2, "Mobile Apps", () { }),

                ],
              ),
            ),
          )
        ],
      ),
    );
  }

  topMenu() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 25.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 25.0),
              child: Container(
                width: Get.width*.05,
                height: 100,
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: AssetImage(
                      "assets/logo1.png"
                    )
                  )
                ),
              ),
            ),
            Row(
              children: [
                Row(
                  children: List.generate(Globals.menu.length, (index) =>
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 25.0),
                        child: InkWell(
                          onTap: (){
                              print(Globals.menu[index]);
                          },
                          child: Text(
                            Globals.menu[index],
                            style: GoogleFonts.oswald(
                              color: ThemeUtils.primaryColor,
                              fontWeight: FontWeight.w100,
                              fontSize: 25,
                            ),
                          ),
                        ),
                      )
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 15.0),
                  child: ElevatedButton(
                    style: ButtonStyle(
                        backgroundColor: MaterialStateProperty.all(ThemeUtils.primaryColor),
                        shadowColor: MaterialStateProperty.all(ThemeUtils.primaryColor),
                        shape: MaterialStateProperty.all(RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(15))
                        )
                    ),
                    onPressed: () { print("button"); },
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Text(
                        Globals.contactMe,
                        style: GoogleFonts.oswald(
                          color: ThemeUtils.white,
                          fontSize: 25,
                        ),
                      ),
                    ),
                  ),
                )
              ],
            ),
        ],
      ),
    );
  }

  greyButton(int index, String title, VoidCallback onTap) {
    return FadingSlideWidget(
      animation: _buttonAnimations[index],
      offset: Offset(index%2==0 ? -(random.nextInt(10) + 1)/10 : (random.nextInt(10) + 1)/10, 0),
      child: Padding(
        padding: const EdgeInsets.all(25.0),
        child: ElevatedButton(
          style: ButtonStyle(
              backgroundColor: MaterialStateProperty.all(ThemeUtils.lightGrey),
              shadowColor: MaterialStateProperty.all(ThemeUtils.lightGrey),
              shape: MaterialStateProperty.all(RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(25))
              )
          ),
          onPressed: onTap,
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              title,
              style: GoogleFonts.oswald(
                  color: ThemeUtils.white,
                  fontWeight: FontWeight.w100,
                fontSize: 25
              ),
            ),
          ),
        ),
      ),
    );
  }

  void _playButtonAnims() {
    for(var x in _buttonAnimationControllers){
      Future.delayed(Duration(milliseconds: _animDelay),(){
        x.forward();
      });
    }
  }
  void _reverseButtonAnims() {
    for(var x in _buttonAnimationControllers){
      Future.delayed(Duration(milliseconds: _animDelay),(){
        x.reverse();
      });
    }
  }
}
