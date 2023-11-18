<?php

declare(strict_types=1);

namespace Yii2\Extensions\Summernote;

use JsonException;
use PHPForge\Html\Helper\Utils;
use PHPForge\Html\TextArea;
use RuntimeException;
use Yii;
use yii\widgets\InputWidget;

final class Summernote extends InputWidget
{
    /**
     * @var array The FilePond configuration.
     *
     * @link https://summernote.org/deep-dive/
     *
     * @phpstan-var array<string, mixed>
     */
    public array $config = [];

    public function init(): void
    {
        if ($this->model === null) {
            throw new RuntimeException('The model is not set.');
        }

        if ($this->attribute === null) {
            throw new RuntimeException('The attribute is not set.');
        }

        $this->id = Utils::generateInputId($this->model->formName(), $this->attribute);
        $this->config = array_merge(['lang' => Yii::$app->language], $this->config);
    }

    public function run(): string
    {
        $this->registerClientScript();

        return $this->renderTextArea();
    }

    /**
     * @throws JsonException
     */
    private function getScript(): string
    {
        $config = json_encode($this->config, JSON_THROW_ON_ERROR);

        return <<<JS
            $('#$this->id').summernote($config);
            $('button.note-btn.btn-light.btn-sm.dropdown-toggle').removeAttr('data-toggle');
            $('button.note-btn.btn-light.btn-sm.dropdown-toggle').attr('data-bs-toggle', 'dropdown');
        JS;
    }

    private function registerClientScript(): void
    {
        $view = $this->getView();

        SummernoteAsset::register($view);

        $view->registerJs($this->getScript());
    }

    /**
     * @return string the generated input tag.
     */
    private function renderTextArea(): string
    {
        return TextArea::widget()
            ->attributes($this->options)
            ->content((string) $this->value)
            ->id($this->id)
            ->name(Utils::generateInputName($this->model->formName(), $this->attribute))
            ->render();
    }
}
