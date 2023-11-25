<?php

declare(strict_types=1);

namespace Yii2\Extensions\Summernote;

use JsonException;
use PHPForge\Html\Helper\Utils;
use PHPForge\Html\TextArea;
use Yii2\Extensions\Summernote\Asset\SummernoteAsset;
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
    private string $id = '';

    public function init(): void
    {
        parent::init();

        $this->config = array_merge(['lang' => Yii::$app->language], $this->config);
        $this->id = $this->hasModel()
            ? Utils::generateInputId($this->model->formName(), $this->attribute)
            : $this->getId() . '-summernote';
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
            $('#{$this->id}').summernote($config);

            var dropdownToggle = $('button.note-btn.btn-light.btn-sm.dropdown-toggle');

            if (dropdownToggle.attr('data-toggle') !== undefined) {
                dropdownToggle.removeAttr('data-toggle');
            }

            if (dropdownToggle.attr('data-bs-toggle') === undefined) {
                dropdownToggle.attr('data-bs-toggle', 'dropdown');
            }
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
        unset($this->options['id']);

        $textArea = TextArea::widget()
            ->attributes($this->options)
            ->content((string) $this->value);

        return match ($this->hasModel()) {
            true => $textArea
                ->id($this->id)
                ->name(Utils::generateInputName($this->model->formName(), $this->attribute))
                ->render(),
            default => $textArea
                ->id($this->id)
                ->name($this->name)
                ->render(),
        };
    }
}
