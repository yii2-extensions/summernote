<p align="center">
    <a href="https://github.com/yii2-extensions/summernote" target="_blank">
        <img src="https://www.yiiframework.com/image/yii_logo_light.svg" height="100px;">
    </a>
    <h1 align="center">Summernote - Super Simple WYSIWYG editor.</h1>
    <br>
</p>

<p align="center">
    <a href="https://www.php.net/releases/8.1/en.php" target="_blank">
        <img src="https://img.shields.io/badge/PHP-%3E%3D8.1-787CB5" alt="php-version">
    </a>
    <a href="https://github.com/yii2-extensions/summernote/actions/workflows/build.yml" target="_blank">
        <img src="https://github.com/yii2-extensions/summernote/actions/workflows/build.yml/badge.svg" alt="PHPUnit">
    </a>
    <a href="https://github.com/yii2-extensions/summernote/actions/workflows/compatibility.yml" target="_blank">
        <img src="https://github.com/yii2-extensions/summernote/actions/workflows/compatibility.yml/badge.svg" alt="PHPUnit">
    </a>    
    <a href="https://codecov.io/gh/yii2-extensions/summernote" target="_blank">
        <img src="https://codecov.io/gh/yii2-extensions/summernote/branch/main/graph/badge.svg?token=MF0XUGVLYC" alt="Codecov">
    </a>
    <a href="https://dashboard.stryker-mutator.io/reports/github.com/yii2-extensions/summernote/main" target="_blank">
        <img src="https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fyii2-extensions%2Fsummernote%2Fmain" alt="Infection">
    </a>       
</p>

<p align="center">
    <a href="https://github.com/yii2-extensions/summernote" target="_blank">
        <img src="docs/images/summernote.png">
    </a>
</p>

## Installation

The preferred way to install this extension is through [composer](https://getcomposer.org/download/).

Either run

```
composer require --dev --prefer-dist yii2-extensions/summernote
```

or add

```
"yii2-extensions/summernote": "dev-main"
```

to the require-dev section of your `composer.json` file.

## Usage

### Name

```php
use Yii2\Extensions\Summernote\Summernote;

echo Summernote::widget(
    [
        'name' => 'content',
        'value' => $value,
        'config' => [
            'focus' => true,
            'height' => 200,
            'maxHeight' => null,
            'minHeight' => null,
            'placeholder' => 'Write here...',
        ],
    ]
);
```

### Active Field

```php
use Yii2\Extensions\Summernote\Summernote;

echo $form
    ->field($model, 'content')
    ->widget(
        Summernote::class,
        [
            'config' => [
                'focus' => true,
                'height' => 200,
                'maxHeight' => null,
                'minHeight' => null,
                'placeholder' => 'Write here...',
            ],
        ]
    );
```

### Properties of the widget

| Property | Type     | Description                      | Default |
|----------|----------|----------------------------------|---------|
| `config` | `array ` | The configuration of the widget. | `[]`    |

> When YII_ENV is set to `dev` or `test`, the widget will load the non-minified version of the JavaScript files,
> otherwise it will load the minified version.

## Quality code

[![static-analysis](https://github.com/yii2-extensions/gii/actions/workflows/static.yml/badge.svg)](https://github.com/yii2-extensions/summernote/actions/workflows/static.yml)
[![phpstan-level](https://img.shields.io/badge/PHPStan%20level-7-blue)](https://github.com/yii2-extensions/summernote/actions/workflows/static.yml)
[![style-ci](https://github.styleci.io/repos/711200053/shield?branch=main)](https://github.styleci.io/repos/711200053?branch=main)

## Support versions Yii2

[![Yii20](https://img.shields.io/badge/Yii2%20version-2.0-blue)](https://github.com/yiisoft/yii2/tree/2.0.49.3)
[![Yii22](https://img.shields.io/badge/Yii2%20version-2.2-blue)](https://github.com/yiisoft/yii2/tree/2.2)

## Testing

[Check the documentation testing](/docs/testing.md) to learn about testing.

## Our social networks

[![Twitter](https://img.shields.io/badge/twitter-follow-1DA1F2?logo=twitter&logoColor=1DA1F2&labelColor=555555?style=flat)](https://twitter.com/Terabytesoftw)

## License

The MIT License. Please see [License File](LICENSE.md) for more information.
