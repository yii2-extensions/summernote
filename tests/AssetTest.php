<?php

declare(strict_types=1);

namespace Yii2\Extensions\Summernote\Tests;

use Yii2\Asset\BootstrapAsset;
use Yii2\Asset\BootstrapPluginAsset;
use Yii2\Extensions\Summernote\Asset\SummernoteAsset;
use Yii;
use yii\web\AssetBundle;
use yii\web\JqueryAsset;
use yii\web\View;

final class AssetTest extends TestCase
{
    public function testBootstrapAssetSimpleDependency(): void
    {
        $view = Yii::$app->getView();

        $this->assertEmpty($view->assetBundles);

        SummernoteAsset::register($view);

        $this->assertCount(4, $view->assetBundles);

        $this->assertArrayHasKey(BootstrapAsset::class, $view->assetBundles);
        $this->assertArrayHasKey(BootstrapPluginAsset::class, $view->assetBundles);
        $this->assertArrayHasKey(JqueryAsset::class, $view->assetBundles);
        $this->assertArrayHasKey(SummernoteAsset::class, $view->assetBundles);
    }

    public function testBootstrapAssetRegister(): void
    {
        $view = new View();

        $this->assertEmpty($view->assetBundles);

        SummernoteAsset::register($view);

        $this->assertCount(4, $view->assetBundles);
        $this->assertInstanceOf(AssetBundle::class, $view->assetBundles[SummernoteAsset::class]);

        $language = Yii::$app->language;
        $result = $view->renderFile(__DIR__ . '/Support/main.php');

        $this->assertStringContainsString('bootstrap.css', $result);
        $this->assertStringContainsString('summernote-bs5.css', $result);
        $this->assertStringContainsString('bootstrap.bundle.js', $result);
        $this->assertStringContainsString('summernote-bs5.js', $result);
        $this->assertStringContainsString("lang/summernote-$language.js", $result);
    }
}
