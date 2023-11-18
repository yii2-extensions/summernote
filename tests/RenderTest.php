<?php

declare(strict_types=1);

namespace Yii2\Extensions\Summernote\Tests;

use Yii;
use Yii2\Extensions\Summernote\Summernote;
use Yii2\Extensions\Summernote\Tests\Support\TestForm;

/**
 * @psalm-suppress PropertyNotSetInConstructor
 */
final class RenderTest extends TestCase
{
    public function testConfig(): void
    {
        $this->mockApplication();

        $view = Yii::$app->getView();

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

        $result = $view->renderFile(__DIR__ . '/Support/main.php');

        $this->assertStringContainsString(
            <<<JS
            $('#testform-content').summernote({"focus":true,"height":200,"maxHeight":null,"minHeight":null,"placeholder":"Write here..."});
            JS,
            $result,
        );
    }

    public function testOptions(): void
    {
        $this->mockApplication();

        $filePond = Summernote::widget(
            [
                'attribute' => 'content',
                'model' => new TestForm(),
                'options' => [
                    'class' => 'test-class'
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
        $this->mockApplication();

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
