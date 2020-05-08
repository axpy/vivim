let gulp = require('gulp');
let responsive = require('gulp-responsive')

gulp.task('map-image', function () {
  return gulp
    .src('assets/images/about/*.png')
    .pipe(
      responsive({
        'map.png': [
          {
            width: 600,
            rename: {
              suffix: '-600',
              extname: '.jpg'
            }
          },
          {
            width: 700,
            rename: {
              suffix: '-700',
              extname: '.jpg'
            }
          },
          {
            width: 900,
            rename: {
              suffix: '-900',
              extname: '.jpg'
            }
          },
          {
            width: 1100,
            rename: {
              suffix: '-1100',
              extname: '.jpg'
            }
          },
          {
            width: 1200,
            rename: {
              suffix: '-1200',
              extname: '.jpg'
            }
          },
          {
            width: 1300,
            rename: {
              suffix: '-1300',
              extname: '.jpg'
            }
          },
          {
            width: 1500,
            rename: {
              suffix: '-1500',
              extname: '.jpg'
            }
          }
        ],
      },
      {
        quality: 50,
        progressive: true,
        withMetadata: false
      }
      )
    )
    .pipe(gulp.dest('assets/images/about'))
})

gulp.task('wel', () => {
  return gulp.src('assets/images/welcome/*.png')
    .pipe(
      responsive({
        'phone_id-min.png': [
          {
            width: 300,
            rename: {
              suffix: '-300'
            }
          },
          {
            width: 400,
            rename: {
              suffix: '-400'
            }
          },
          {
            width: 700,
            rename: {
              suffix: '-700'
            }
          },
          {
            width: 500,
            rename: {
              suffix: '-500'
            }
          },
          {
            width: 600,
            rename: {
              suffix: '-600'
            }
          },
        ],
        'play.png':[
          {}
        ],
        'phone_id.png':[
          {}
        ]
      },
      {
        quality: 100,
        progressive: false,
        withMetadata: false
      }
      )
    )
    .pipe(gulp.dest('assets/images/welcome'))
})

gulp.task('sol11', function () {
  return gulp
    .src('assets/images/solutions/solutions_authentication.jpg')
    .pipe(
      responsive({
        'solutions_authentication.jpg': [
          {
            width: 300,
            rename: {
              suffix: '-300',
              extname: '.jpg'
            }
          },
          {
            width: 400,
            rename: {
              suffix: '-400',
              extname: '.jpg'
            }
          },
          {
            width: 500,
            rename: {
              suffix: '-500',
              extname: '.jpg'
            }
          },
          {
            width: 600,
            rename: {
              suffix: '-600',
              extname: '.jpg'
            }
          },
          {
            width: 700,
            rename: {
              suffix: '-700',
              extname: '.jpg'
            }
          },
          {
            width: 800,
            rename: {
              suffix: '-800',
              extname: '.jpg'
            }
          },
          {
            width: 900,
            rename: {
              suffix: '-900',
              extname: '.jpg'
            }
          }
        ]
      },
      {
        quality: 70,
        progressive: true,
        withMetadata: false
      }
      )
    )
    .pipe(gulp.dest('assets/images/solutions'))
})

gulp.task('sol22', function () {
  return gulp
    .src('assets/images/solutions/solutions_verification.jpg')
    .pipe(
      responsive({
        'solutions_verification.jpg': [
          {
            width: 300,
            rename: {
              suffix: '-300'
            }
          },
          {
            width: 400,
            rename: {
              suffix: '-400'
            }
          },
          {
            width: 500,
            rename: {
              suffix: '-500'
            }
          },
          {
            width: 600,
            rename: {
              suffix: '-600'
            }
          },
          {
            width: 700,
            rename: {
              suffix: '-700'
            }
          },
          {
            width: 800,
            rename: {
              suffix: '-800'
            }
          },
          {
            width: 900,
            rename: {
              suffix: '-900'
            }
          },
          {
            width: 1000,
            rename: {
              suffix: '-1000'
            }
          },
          {
            width: 1100,
            rename: {
              suffix: '-1100'
            }
          },
          {
            width: 1200,
            rename: {
              suffix: '-1200'
            }
          }
        ],
      },
      {
        quality: 90,
        progressive: true,
        withMetadata: false
      }
      )
    )
    .pipe(gulp.dest('assets/images/solutions'))
})

gulp.task('mob', function () {
  return gulp
    .src('assets/images/tryIt/*.png')
    .pipe(
      responsive({
        'mobile-mini.png': [
          {
            width: 300,
            rename: {
              suffix: '-300',
            }
          },
          {
            width: 400,
            rename: {
              suffix: '-400',
            }
          },
          {
            width: 500,
            rename: {
              suffix: '-500',
            }
          },
          {
            width: 350,
            rename: {
              suffix: '-350',
            }
          },
          {
            width: 450,
            rename: {
              suffix: '-450',
            }
          },
          {
            width: 550,
            rename: {
              suffix: '-550',
            }
          }
        ]
      },
      {
        quality: 70,
        progressive: true,
        withMetadata: false
      }
      )
    )
    .pipe(gulp.dest('assets/images/tryIt'))
})

gulp.task('w', function () {
  return gulp
    .src('assets/images/wave-new.png')
    .pipe(
      responsive({
        'wave-new.png': [
          {
            width: 300,
            rename: {
              suffix: '-300',
            }
          },
          {
            width: 400,
            rename: {
              suffix: '-400',
            }
          },
          {
            width: 500,
            rename: {
              suffix: '-500',
            }
          },
          {
            width: 600,
            rename: {
              suffix: '-600',
            }
          },
          {
            width: 700,
            rename: {
              suffix: '-700',
            }
          },
          {
            width: 800,
            rename: {
              suffix: '-800',
            }
          },
          {
            width: 350,
            rename: {
              suffix: '-350',
            }
          },
          {
            width: 450,
            rename: {
              suffix: '-450',
            }
          },
          {
            width: 550,
            rename: {
              suffix: '-550',
            }
          },
          {
            width: 650,
            rename: {
              suffix: '-650',
            }
          },
          {
            width: 750,
            rename: {
              suffix: '-750',
            }
          }
        ]
      },
      {
        quality: 70,
        progressive: false,
        withMetadata: false
      }
      )
    )
    .pipe(gulp.dest('assets/images'))
})