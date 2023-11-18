<?php

declare(strict_types=1);

namespace Yii2\Extensions\Summernote;

use Yii2\Asset\BootstrapPluginAsset;
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
    public $sourcePath = '@npm/summernote/dist';

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

        $assetSummernoteCss = YII_ENV === 'prod'
            ? ['summernote-bs5.min.css'] : ['summernote-bs5.css', 'summernote-bs5.css.map'];

        $this->css = $assetSummernoteCss;

        $assetSummernoteJs = YII_ENV === 'prod'
            ? ['summernote-bs5.min.js'] : ['summernote-bs5.js', 'summernote-bs5.js.map'];

        $this->js = $assetSummernoteJs;

        $this->publishOptions['only'] = array_merge($assetSummernoteCss, $assetSummernoteJs, ['font/*']);
    }
}
