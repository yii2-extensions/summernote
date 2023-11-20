<?php

declare(strict_types=1);

namespace Yii2\Extensions\Summernote\Tests;

use PHPForge\Support\Assert;
use Yii;
use yii\di\Container;
use yii\web\Application;
use yii\web\View;

/**
 * This is the base class for all yii framework unit tests.
 */
abstract class TestCase extends \PHPUnit\Framework\TestCase
{
    protected View $view;

    protected function destroyApplication()
    {
        Yii::$app = null;
        Yii::$container = new Container();
    }

    protected function mockApplication(): void
    {
        new Application(
            [
                'id' => 'testapp',
                'aliases' => [
                    '@root' => dirname(__DIR__),
                    '@bower' => '@root/node_modules',
                    '@npm' => '@root/node_modules',
                    '@vendor' => '@root/vendor',
                ],
                'basePath' => dirname(__DIR__),
                'components' => [
                    'assetManager' => [
                        'basePath' => __DIR__ . '/Support/runtime',
                    ],
                    'request' => [
                        'cookieValidationKey' => 'wefJDF8sfdsfSDefwqdxj9oq',
                        'scriptFile' => __DIR__ . '/index.php',
                        'scriptUrl' => '/index.php',
                    ],
                ],
            ],
        );
    }

    protected function setup(): void
    {
        parent::setUp();
        $this->mockApplication();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
        $this->destroyApplication();
        Assert::removeFilesFromDirectory(__DIR__ . '/Support/runtime');

        unset($this->view);
    }
}
