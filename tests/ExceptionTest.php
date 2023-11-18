<?php

declare(strict_types=1);

namespace Yii2\Extensions\Summernote\Tests;

use RuntimeException;
use Yii2\Extensions\Summernote\Summernote;
use Yii2\Extensions\Summernote\Tests\Support\TestForm;

final class ExceptionTest extends TestCase
{
    public function testNotSetAttribute(): void
    {
        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('The attribute is not set.');

        Summernote::widget(['model' => new TestForm()]);
    }

    public function testNotSetModel(): void
    {
        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('The model is not set.');

        Summernote::widget(['attribute' => 'array']);
    }
}
