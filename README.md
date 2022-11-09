# :alarm_clock: つながる TIMER

プレゼンテーションの時間管理を行うアプリケーションです。同じアカウントでログインしていただくと複数台でも同期的に時間の管理が可能です。

## このアプリケーションの存在意義

勉強会や発表会を主催する際に、時間管理で以下の課題が上がったため。

- 発表の時間の計測を行いたい
- アラーム音を鳴らすことや、発表者に主催側から声がけをするのは避けたい
- 発表者に自発的に時間の管理をしてほしい

## このアプリケーションでできること

このアプリケーションでは、**複数台で同じアカウントでログインをする**ことで、時間の管理を同期的に行うことができます。また、時間の測り方はカウントダウンではなく、**カウントアップ**を採用しています。理由としては、持ち時間をオーバーしても特に問題がないことと、カウントダウン式の場合、発表者の持ち時間を把握し、セットするという手間が発生するためです。
カウントアップ式の場合、発表者自身が持ち時間を把握するだけでいいので主催側のコストが低いと考えました。

### 操作

- カウント開始：0 秒からカウントアップをすることができます。
- カウント停止：0 秒からカウントアップをすることができます。
- カウント再開：停止した時間からカウントアップを再開します。
- リセット：カウントしていた時間を停止し、0 秒に変更します。

![Group 4](https://user-images.githubusercontent.com/63274288/168437965-13b7dd7b-208d-453e-8cd2-1d9ee73b5e85.png)

## その他

- [:rocket: フレームワークについて](docs/ABOUT-FRAMEWORK.md)
