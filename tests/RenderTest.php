<?php

declare(strict_types=1);

namespace Yii2\Extensions\Summernote\Tests;

use Yii2\Extensions\Summernote\Summernote;
use Yii2\Extensions\Summernote\Tests\Support\TestForm;
use Yii;

/**
 * @psalm-suppress PropertyNotSetInConstructor
 */
final class RenderTest extends TestCase
{
    public function setup(): void
    {
        parent::setUp();
        $this->mockApplication();

        $this->view = Yii::$app->getView();
    }

    public function testConfig(): void
    {
        $filePond = Summernote::widget(
            [
                'attribute' => 'content',
                'model' => new TestForm(),
                'config' => [
                    'focus' => true,
                    'height' => 200,
                    'maxHeight' => null,
                    'minHeight' => null,
                    'placeholder' => 'Write here...',
                ],
            ],
        );

        $this->assertSame(
            <<<HTML
            <textarea id="testform-content" name="TestForm[content]"></textarea>
            HTML,
            $filePond,
        );

        $result = $this->view->renderFile(__DIR__ . '/Support/main.php');

        $this->assertStringContainsString(
            <<<JS
             $('#testform-content').summernote({"lang":"en-US","focus":true,"height":200,"maxHeight":null,"minHeight":null,"placeholder":"Write here..."});
            JS,
            $result,
        );
    }

    public function testOptions(): void
    {
        $filePond = Summernote::widget(
            [
                'attribute' => 'content',
                'model' => new TestForm(),
                'options' => [
                    'class' => 'test-class',
                ],
            ],
        );

        $this->assertSame(
            <<<HTML
            <textarea class="test-class" id="testform-content" name="TestForm[content]"></textarea>
            HTML,
            $filePond,
        );
    }

    public function testRender(): void
    {
        $filePond = Summernote::widget(
            [
                'attribute' => 'content',
                'model' => new TestForm(),
            ],
        );

        $this->assertSame(
            <<<HTML
            <textarea id="testform-content" name="TestForm[content]"></textarea>
            HTML,
            $filePond,
        );
    }
}
