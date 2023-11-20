<?php

declare(strict_types=1);

namespace Yii2\Extensions\Summernote\Tests;

use Yii2\Asset\BootstrapAsset;
use Yii2\Asset\BootstrapPluginAsset;
use Yii2\Extensions\Summernote\Asset\SummernoteAsset;
use Yii;
use yii\web\AssetBundle;
use yii\web\JqueryAsset;

final class AssetTest extends TestCase
{
    public function setup(): void
    {
        parent::setUp();
        $this->mockApplication();

        $this->view = Yii::$app->getView();
    }

    public function testBootstrapAssetSimpleDependency(): void
    {
        $this->assertEmpty($this->view->assetBundles);

        SummernoteAsset::register($this->view);

        $this->assertCount(4, $this->view->assetBundles);

        $this->assertArrayHasKey(BootstrapAsset::class, $this->view->assetBundles);
        $this->assertArrayHasKey(BootstrapPluginAsset::class, $this->view->assetBundles);
        $this->assertArrayHasKey(JqueryAsset::class, $this->view->assetBundles);
        $this->assertArrayHasKey(SummernoteAsset::class, $this->view->assetBundles);
    }

    public function testBootstrapAssetRegister(): void
    {
        $this->assertEmpty($this->view->assetBundles);

        SummernoteAsset::register($this->view);

        $this->assertCount(4, $this->view->assetBundles);
        $this->assertInstanceOf(AssetBundle::class, $this->view->assetBundles[SummernoteAsset::class]);

        $language = Yii::$app->language;
        $result = $this->view->renderFile(__DIR__ . '/Support/main.php');

        $this->assertStringContainsString('bootstrap.css', $result);
        $this->assertStringContainsString('summernote-bs5.css', $result);
        $this->assertStringContainsString('bootstrap.bundle.js', $result);
        $this->assertStringContainsString('summernote-bs5.js', $result);
        $this->assertStringContainsString("lang/summernote-$language.js", $result);
    }
}
