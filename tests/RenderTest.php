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

        Summernote::$counter = 0;

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

        $result = $this->view->renderFile(__DIR__ . '/Support/main.php', ['widget' => $filePond]);

        $this->assertStringContainsString(
            <<<JS
             $('#testform-content').summernote({"lang":"en-US","focus":true,"height":200,"maxHeight":null,"minHeight":null,"placeholder":"Write here..."});
            JS,
            $result,
        );
    }

    public function testName(): void
    {
        $filePond = Summernote::widget(['name' => 'summernote']);

        $this->assertSame(
            <<<HTML
            <textarea id="w0-summernote" name="summernote"></textarea>
            HTML,
            $filePond,
        );

        $result = $this->view->renderFile(__DIR__ . '/Support/main.php', ['widget' => $filePond]);

        $this->assertStringContainsString(
            <<<JS
             $('#w0-summernote').summernote({"lang":"en-US"});
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
            <textarea id="testform-content" class="test-class" name="TestForm[content]"></textarea>
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

        $result = $this->view->renderFile(__DIR__ . '/Support/main.php', ['widget' => $filePond]);

        $this->assertStringContainsString(
            <<<JS
             $('#testform-content').summernote({"lang":"en-US"});
            JS,
            $result,
        );
    }

    public function testValue(): void
    {
        $filePond = Summernote::widget(
            [
                'name' => 'content',
                'value' => 'test-content',
            ],
        );

        $this->assertSame(
            <<<HTML
            <textarea id="w0-summernote" name="content">test-content</textarea>
            HTML,
            $filePond,
        );

        $result = $this->view->renderFile(__DIR__ . '/Support/main.php', ['widget' => $filePond]);

        $this->assertStringContainsString(
            <<<JS
             $('#w0-summernote').summernote({"lang":"en-US"});
            JS,
            $result,
        );
    }

    public function testValueWithModel(): void
    {
        $model = new TestForm();
        $model->content = 'test-content';

        $filePond = Summernote::widget(
            [
                'attribute' => 'content',
                'model' => $model,
            ],
        );

        $this->assertSame(
            <<<HTML
            <textarea id="testform-content" name="TestForm[content]">test-content</textarea>
            HTML,
            $filePond,
        );

        $result = $this->view->renderFile(__DIR__ . '/Support/main.php', ['widget' => $filePond]);

        $this->assertStringContainsString(
            <<<JS
             $('#testform-content').summernote({"lang":"en-US"});
            JS,
            $result,
        );
    }
}
