<?php

declare(strict_types=1);

namespace Yii2\Extensions\Summernote\Asset;

use Yii2\Asset\BootstrapPluginAsset;
use Yii;
use yii\web\AssetBundle;
use yii\web\JqueryAsset;

/**
 * Summernote CSS and JS bundle.
 */
final class SummernoteAsset extends AssetBundle
{
    /**
     * @inheritDoc
     */
    public $sourcePath = __DIR__;

    /**
     * @inheritDoc
     *
     * @phpstan-var array<array-key, mixed>
     */
    public $depends = [
        BootstrapPluginAsset::class,
        JqueryAsset::class,
    ];

    public function init(): void
    {
        parent::init();

        $language = Yii::$app->language;

        $assetCss = YII_ENV === 'prod' ? 'css/summernote.min.css' : 'css/summernote.css';
        $assetJs = YII_ENV === 'prod' ? 'js/summernote.min.js' : 'js/summernote.js';
        $assetLang = YII_ENV === 'prod' ? "lang/summernote-$language.min.js" : "lang/summernote-$language.js";

        $this->css[] = $assetCss;
        $this->js[] = $assetJs;
        $this->js[] = $assetLang;

        $only = [
            $assetCss,
            $assetJs,
            'css/font/*',
            'lang/*',
            'plugin/*/**',
        ];

        $only = array_merge(
            $only,
            YII_ENV === 'prod'
                ? ['css/summernote.min.css.map', 'js/summernote.min.js.map'] : ["lang/summernote-$language.js.map"]
        );

        $this->publishOptions['only'] = $only;
    }
}
