import 'package:flutter/material.dart';

class ThemeUtils{
  static const Color primaryColor = const Color(0xff03e296);
  static const Color white = const Color(0xffffffff);
  static const Color lightGrey = const Color(0xff707070);
  static const Color darkGrey = const Color(0xff161616);

  static LinearGradient greyGradient = const LinearGradient(
      colors: [ ThemeUtils.lightGrey, ThemeUtils.darkGrey ],
      stops: [0.01, .69],
      begin: Alignment.bottomRight,
      end:  Alignment.topLeft
  );
}